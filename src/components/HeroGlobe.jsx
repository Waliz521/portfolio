import { useEffect, useRef } from "react";
import { personalInfo } from "../data/personal";

/** Lahore — WGS 84 */
const LAHORE = { lat: 31.5204, lng: 74.3587 };
const LAHORE_COORDS = "31.52°N · 74.35°E";

function cssColorToRgbUnit(value) {
  const trimmed = value.trim();
  if (trimmed.startsWith("#")) {
    const hex = trimmed.slice(1);
    return [
      parseInt(hex.slice(0, 2), 16) / 255,
      parseInt(hex.slice(2, 4), 16) / 255,
      parseInt(hex.slice(4, 6), 16) / 255,
    ];
  }

  const match = trimmed.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)/);
  if (match) {
    return [Number(match[1]) / 255, Number(match[2]) / 255, Number(match[3]) / 255];
  }

  return [0.48, 0.55, 0.42];
}

function unwrapCobeCanvas(root, canvas) {
  if (!root || !canvas) return;
  if (canvas.parentElement && canvas.parentElement !== root) {
    root.insertBefore(canvas, canvas.parentElement);
    canvas.parentElement.remove();
  }
}

export default function HeroGlobe() {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const pointerRef = useRef({
    hover: false,
    x: 0.5,
    y: 0.5,
    movementX: 0,
    movementY: 0,
    dragging: false,
  });

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return undefined;

    let cancelled = false;
    let rafId = 0;
    let globe;
    let phi = 4.35;
    let theta = 0.28;
    let canvasSize = 560;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const readTheme = () => {
      const styles = getComputedStyle(document.documentElement);
      const accent = styles.getPropertyValue("--color-accent").trim() || "#7a8b6a";
      const primary = styles.getPropertyValue("--color-primary").trim() || "#5f6f52";
      const glow = styles.getPropertyValue("--color-background-elevated").trim() || "#fffef9";
      return {
        accent: cssColorToRgbUnit(accent),
        primary: cssColorToRgbUnit(primary),
        glow: cssColorToRgbUnit(glow),
      };
    };

    const measure = () => {
      const rect = root.getBoundingClientRect();
      const next = Math.max(280, Math.round(rect.width * 2));
      if (next !== canvasSize) {
        canvasSize = next;
        globe?.update({ width: canvasSize, height: canvasSize });
      }
    };

    const setPointer = (clientX, clientY) => {
      const rect = root.getBoundingClientRect();
      if (rect.width <= 0) return;
      pointerRef.current.x = (clientX - rect.left) / rect.width;
      pointerRef.current.y = (clientY - rect.top) / rect.height;
      pointerRef.current.hover = true;
    };

    const onPointerMove = (event) => {
      setPointer(event.clientX, event.clientY);
      if (pointerRef.current.dragging) {
        pointerRef.current.movementX = event.movementX;
        pointerRef.current.movementY = event.movementY;
      }
    };

    const onPointerDown = (event) => {
      pointerRef.current.dragging = true;
      root.setPointerCapture(event.pointerId);
      setPointer(event.clientX, event.clientY);
    };

    const onPointerUp = (event) => {
      pointerRef.current.dragging = false;
      pointerRef.current.movementX = 0;
      pointerRef.current.movementY = 0;
      if (root.hasPointerCapture(event.pointerId)) {
        root.releasePointerCapture(event.pointerId);
      }
    };

    const onPointerLeave = () => {
      pointerRef.current.hover = false;
      pointerRef.current.dragging = false;
      pointerRef.current.movementX = 0;
      pointerRef.current.movementY = 0;
    };

    const frame = () => {
      if (cancelled || !globe) return;

      const theme = readTheme();
      const pointer = pointerRef.current;

      if (pointer.dragging) {
        phi += pointer.movementX * 0.005;
        theta = Math.max(0.12, Math.min(0.58, theta + pointer.movementY * 0.003));
        pointer.movementX = 0;
        pointer.movementY = 0;
      } else if (pointer.hover) {
        phi += (pointer.x - 0.5) * 0.04;
        theta += (0.18 + (pointer.y - 0.5) * 0.36 - theta) * 0.1;
      } else if (!reducedMotion) {
        phi += 0.0045;
        theta += (0.28 - theta) * 0.035;
      }

      globe.update({
        phi,
        theta,
        baseColor: theme.primary,
        markerColor: theme.accent,
        glowColor: theme.glow,
      });

      rafId = requestAnimationFrame(frame);
    };

    const initGlobe = async () => {
      if (cancelled) return;

      measure();
      if (root.getBoundingClientRect().width <= 0) {
        rafId = requestAnimationFrame(initGlobe);
        return;
      }

      unwrapCobeCanvas(root, canvas);

      const { default: createGlobe } = await import("cobe");
      if (cancelled) return;

      const theme = readTheme();
      globe = createGlobe(canvas, {
        devicePixelRatio: 2,
        width: canvasSize,
        height: canvasSize,
        phi,
        theta,
        dark: 0,
        diffuse: 1.35,
        mapSamples: 16000,
        mapBrightness: 0,
        mapBaseBrightness: 0,
        baseColor: theme.primary,
        markerColor: theme.accent,
        glowColor: theme.glow,
        scale: 1.04,
        markers: [{ location: [LAHORE.lat, LAHORE.lng], size: 0, id: "lahore" }],
      });

      rafId = requestAnimationFrame(frame);
    };

    root.addEventListener("pointermove", onPointerMove);
    root.addEventListener("pointerdown", onPointerDown);
    root.addEventListener("pointerup", onPointerUp);
    root.addEventListener("pointercancel", onPointerUp);
    root.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("resize", measure);

    initGlobe();

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      globe?.destroy();
      unwrapCobeCanvas(root, canvas);
      root.removeEventListener("pointermove", onPointerMove);
      root.removeEventListener("pointerdown", onPointerDown);
      root.removeEventListener("pointerup", onPointerUp);
      root.removeEventListener("pointercancel", onPointerUp);
      root.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div className="hero__globe-wrap">
      <div
        ref={rootRef}
        className="hero__globe"
        role="img"
        aria-label={`Interactive globe — ${personalInfo.location}, ${LAHORE_COORDS}`}
      >
        <canvas ref={canvasRef} className="hero__globe-canvas" width="560" height="560" />
        <span className="hero__globe-pin" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
          </svg>
        </span>
      </div>
      <p className="hero__globe-caption">
        <span className="hero__globe-place">{personalInfo.location}</span>
        <span className="hero__globe-coords">{LAHORE_COORDS}</span>
      </p>
    </div>
  );
}

export { HeroGlobe };
