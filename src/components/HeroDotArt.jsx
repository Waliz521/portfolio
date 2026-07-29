import { useEffect, useRef } from "react";

const COLS = 20;
const ROWS = 24;
const PIN = { col: 12, row: 15 };
const POINTER_RADIUS = 72;

function sampleElevation(col, row, time) {
  const x = col / COLS;
  const y = row / ROWS;
  return (
    Math.sin(x * 4.2 + time * 0.55) * Math.cos(y * 3.6 - time * 0.42) +
    Math.sin((x + y) * 2.8 + time * 0.35) * 0.55 +
    Math.cos(x * 1.8 - y * 2.4 + time * 0.28) * 0.32
  );
}

function normalizeElevation(value) {
  return Math.min(1, Math.max(0, (value + 1.35) / 2.7));
}

function pointerInfluence(px, py, x, y, strength) {
  if (strength <= 0.001 || px == null || py == null) return 0;
  const dist = Math.hypot(x - px, y - py);
  return strength * Math.exp(-(dist * dist) / (POINTER_RADIUS * POINTER_RADIUS));
}

export function HeroDotArt() {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const pointerRef = useRef({ x: null, y: null, strength: 0, hover: false });
  const coordsRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    const coordsEl = coordsRef.current;
    if (!root || !canvas) return undefined;

    const ctx = canvas.getContext("2d");
    if (!ctx) return undefined;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let rafId = 0;
    let start = performance.now();

    const readColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        accent: styles.getPropertyValue("--color-accent").trim() || "#7a8b6a",
        muted: styles.getPropertyValue("--color-muted").trim() || "#7a776f",
        border: styles.getPropertyValue("--color-border").trim() || "rgba(74, 86, 64, 0.14)",
        surface: styles.getPropertyValue("--color-background-elevated").trim() || "#fffef9",
      };
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const setPointerFromEvent = (event) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = "touches" in event ? event.touches[0]?.clientX : event.clientX;
      const clientY = "touches" in event ? event.touches[0]?.clientY : event.clientY;
      if (clientX == null || clientY == null) return;

      pointerRef.current.x = clientX - rect.left;
      pointerRef.current.y = clientY - rect.top;
      pointerRef.current.strength = 1;
      pointerRef.current.hover = true;
    };

    const clearPointer = () => {
      pointerRef.current.hover = false;
    };

    const draw = (time) => {
      const { width, height } = canvas.getBoundingClientRect();
      const colors = readColors();
      const t = reducedMotion ? 0 : (time - start) * 0.001;
      const pointer = pointerRef.current;

      if (!pointer.hover && pointer.strength > 0) {
        pointer.strength *= 0.9;
      }

      const padX = width * 0.1;
      const padY = height * 0.1;
      const gridW = width - padX * 2;
      const gridH = height - padY * 2;
      const stepX = gridW / (COLS - 1);
      const stepY = gridH / (ROWS - 1);
      const scanX = reducedMotion
        ? width * 0.62
        : padX + ((Math.sin(t * 0.35) + 1) / 2) * gridW;

      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = colors.border;
      ctx.lineWidth = 1;
      for (let c = 0; c < COLS; c += 5) {
        const x = padX + c * stepX;
        ctx.beginPath();
        ctx.moveTo(x, padY);
        ctx.lineTo(x, padY + gridH);
        ctx.stroke();
      }
      for (let r = 0; r < ROWS; r += 5) {
        const y = padY + r * stepY;
        ctx.beginPath();
        ctx.moveTo(padX, y);
        ctx.lineTo(padX + gridW, y);
        ctx.stroke();
      }

      if (!reducedMotion) {
        const band = ctx.createLinearGradient(scanX - 28, 0, scanX + 28, 0);
        band.addColorStop(0, "rgba(122, 139, 106, 0)");
        band.addColorStop(0.5, "rgba(122, 139, 106, 0.14)");
        band.addColorStop(1, "rgba(122, 139, 106, 0)");
        ctx.fillStyle = band;
        ctx.fillRect(scanX - 28, padY, 56, gridH);
      }

      for (let row = 0; row < ROWS; row += 1) {
        for (let col = 0; col < COLS; col += 1) {
          const baseElev = normalizeElevation(sampleElevation(col, row, t));
          const x = padX + col * stepX;
          const y = padY + row * stepY;
          const influence = pointerInfluence(pointer.x, pointer.y, x, y, pointer.strength);
          const elev = Math.min(1, baseElev + influence * 0.55);
          const radius = 1.1 + elev * 1.35 + influence * 1.1;
          const isHigh = elev > 0.68 || influence > 0.35;
          const ripple = influence * 4;
          const dist = Math.hypot(x - (pointer.x ?? x), y - (pointer.y ?? y)) || 1;
          const drawX = x + ((x - (pointer.x ?? x)) / dist) * ripple * 0.35;
          const drawY = y - ripple * 0.85;

          ctx.beginPath();
          ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
          ctx.fillStyle = isHigh ? colors.accent : colors.muted;
          ctx.globalAlpha = isHigh ? 0.35 + elev * 0.55 + influence * 0.25 : 0.14 + elev * 0.62;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      }

      const pinX = padX + PIN.col * stepX;
      const pinY = padY + PIN.row * stepY;

      if (!reducedMotion) {
        const pulse = (Math.sin(t * 2.4) + 1) / 2;
        ctx.beginPath();
        ctx.arc(pinX, pinY, 10 + pulse * 8, 0, Math.PI * 2);
        ctx.strokeStyle = colors.accent;
        ctx.globalAlpha = 0.22 * (1 - pulse);
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      ctx.beginPath();
      ctx.arc(pinX, pinY, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = colors.accent;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(pinX, pinY, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = colors.surface;
      ctx.fill();

      if (pointer.hover && pointer.x != null && pointer.y != null) {
        ctx.beginPath();
        ctx.arc(pointer.x, pointer.y, POINTER_RADIUS, 0, Math.PI * 2);
        ctx.strokeStyle = colors.accent;
        ctx.globalAlpha = 0.12;
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.globalAlpha = 1;

        ctx.strokeStyle = colors.accent;
        ctx.globalAlpha = 0.35;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(pointer.x - 7, pointer.y);
        ctx.lineTo(pointer.x + 7, pointer.y);
        ctx.moveTo(pointer.x, pointer.y - 7);
        ctx.lineTo(pointer.x, pointer.y + 7);
        ctx.stroke();
        ctx.globalAlpha = 1;

        const normX = ((pointer.x - padX) / gridW) * 180 - 90;
        const normY = 90 - ((pointer.y - padY) / gridH) * 180;
        if (coordsEl) {
          coordsEl.textContent = `${normY.toFixed(1)}°N · ${normX.toFixed(1)}°E`;
        }
      } else if (coordsEl) {
        coordsEl.textContent = "31.52°N · 74.35°E";
      }

      const shouldAnimate = !reducedMotion || pointer.strength > 0.01;
      if (shouldAnimate) {
        rafId = requestAnimationFrame(draw);
      }
    };

    resize();
    rafId = requestAnimationFrame(draw);

    const onResize = () => resize();

    canvas.addEventListener("mousemove", setPointerFromEvent);
    canvas.addEventListener("mouseleave", clearPointer);
    canvas.addEventListener("touchstart", setPointerFromEvent, { passive: true });
    canvas.addEventListener("touchmove", setPointerFromEvent, { passive: true });
    canvas.addEventListener("touchend", clearPointer);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      canvas.removeEventListener("mousemove", setPointerFromEvent);
      canvas.removeEventListener("mouseleave", clearPointer);
      canvas.removeEventListener("touchstart", setPointerFromEvent);
      canvas.removeEventListener("touchmove", setPointerFromEvent);
      canvas.removeEventListener("touchend", clearPointer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div ref={rootRef} className="hero__dot-art hero__dot-art--interactive">
      <canvas ref={canvasRef} className="hero__dot-art-canvas" aria-hidden="true" />
      <p ref={coordsRef} className="hero__dot-art-coords">
        31.52°N · 74.35°E
      </p>
    </div>
  );
}
