import { useMemo } from "react";

export function CircularProgress({ technologies = [], label, size = 120 }) {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  // Set to 100% for full circle
  const offset = 0;
  const center = size / 2;

  // Generate positions with collision detection
  const techPositions = useMemo(() => {
    if (technologies.length === 0) return [];
    
    const seed = technologies.join('').length;
    const positions = [];
    // Adjust minDistance based on circle size - larger circles need more space
    const minDistance = size > 180 ? 100 : 90; // More space for larger circles
    const maxAttempts = 150; // More attempts for better positioning
    
    // Estimate text dimensions (approximate)
    const estimateTextSize = (text, fontSize) => {
      // Rough estimate: ~8px per character for font size 1rem
      const width = text.length * fontSize * 8;
      const height = fontSize * 16;
      return { width, height };
    };
    
    // Calculate average text length to determine base sizing strategy
    const avgTextLength = technologies.reduce((sum, t) => sum + t.length, 0) / technologies.length;
    const hasLongTexts = avgTextLength > 15;
    
    technologies.forEach((tech, index) => {
      const textLength = tech.length;
      const random3 = (Math.sin(index * 3.1 + seed) * 10000) % 1;
      
      // More consistent sizing - similar to Enterprise circle approach
      // For circles with mostly short texts (like Enterprise), use consistent larger sizes
      // For circles with longer texts, scale appropriately but keep more consistent
      let baseFontSize;
      
      // Specific size reduction for ArcGIS SDK and Leaflet
      if (tech === "ArcGIS SDK for JavaScript" || tech === "Leaflet") {
        baseFontSize = 0.65 + random3 * 0.1; // 0.65 to 0.75rem - smaller size
      } else if (tech === "Web GIS Development") {
        // Slightly larger size for Web GIS Development
        baseFontSize = 0.8 + random3 * 0.15; // 0.8 to 0.95rem
      } else if (!hasLongTexts) {
        // All texts are relatively short - use consistent larger sizes (like Enterprise)
        baseFontSize = 0.85 + random3 * 0.2; // 0.85 to 1.05rem - consistent range
      } else {
        // Has longer texts - scale based on length but keep more consistent
        if (textLength < 12) {
          baseFontSize = 0.9 + random3 * 0.15; // 0.9 to 1.05rem
        } else if (textLength < 20) {
          baseFontSize = 0.8 + random3 * 0.15; // 0.8 to 0.95rem
        } else if (textLength < 30) {
          baseFontSize = 0.7 + random3 * 0.1; // 0.7 to 0.8rem
        } else {
          baseFontSize = 0.65 + random3 * 0.1; // 0.65 to 0.75rem
        }
      }
      
      const fontSize = baseFontSize;
      
      const rotation = 0; // No rotation/tilt
      
      const textSize = estimateTextSize(tech, fontSize);
      const textRadius = Math.sqrt(textSize.width ** 2 + textSize.height ** 2) / 2;
      
      let attempts = 0;
      let foundPosition = false;
      let x, y, angle, distance;
      
      // Try to find a non-overlapping position
      while (attempts < maxAttempts && !foundPosition) {
        // More even distribution like Enterprise circle - less randomness
        const baseAngle = (index / technologies.length) * 2 * Math.PI;
        // Smaller angle variation for more even distribution
        const angleVariation = ((Math.sin(index * 2.3 + seed + attempts) * 10000) % 1) * 0.3 - 0.15;
        angle = baseAngle + angleVariation;
        
        // More consistent distance from center - like Enterprise
        const random2 = (Math.cos(index * 1.7 + seed + attempts) * 10000) % 1;
        // Tighter range for more consistent positioning
        distance = radius * (0.35 + random2 * 0.2); // 0.35 to 0.55 of radius - more centered
        
        x = center + Math.cos(angle) * distance;
        y = center + Math.sin(angle) * distance;
        
        // Check if position is within circle bounds (more conservative margin)
        const distFromCenter = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
        // Use larger margin (20px for larger circles, 15px for smaller) to ensure text stays well inside
        const margin = size > 180 ? 20 : 15;
        if (distFromCenter + textRadius > radius - margin) {
          attempts++;
          continue;
        }
        
        // Check for collisions with existing positions (improved detection)
        let hasCollision = false;
        for (const existing of positions) {
          const existingTextSize = estimateTextSize(existing.tech, existing.fontSize);
          const existingRadius = Math.sqrt(existingTextSize.width ** 2 + existingTextSize.height ** 2) / 2;
          
          const dx = x - existing.x;
          const dy = y - existing.y;
          const distanceBetween = Math.sqrt(dx ** 2 + dy ** 2);
          
          // Use sum of both radii plus minimum distance for better spacing
          const requiredDistance = textRadius + existingRadius + minDistance;
          if (distanceBetween < requiredDistance) {
            hasCollision = true;
            break;
          }
        }
        
        if (!hasCollision) {
          foundPosition = true;
        } else {
          attempts++;
        }
      }
      
      // If we couldn't find a good position, use a fallback with even distribution
      if (!foundPosition) {
        // Try evenly spaced positions first
        const baseAngle = (index / technologies.length) * 2 * Math.PI;
        // Try different distances to find a spot
        for (let distFactor = 0.3; distFactor <= 0.5; distFactor += 0.05) {
          distance = radius * distFactor;
          x = center + Math.cos(baseAngle) * distance;
          y = center + Math.sin(baseAngle) * distance;
          
          // Quick check if this position works
          const distFromCenter = Math.sqrt((x - center) ** 2 + (y - center) ** 2);
          const margin = size > 180 ? 20 : 15;
          if (distFromCenter + textRadius <= radius - margin) {
            // Check collisions with same logic as main loop
            let collision = false;
            for (const existing of positions) {
              const existingTextSize = estimateTextSize(existing.tech, existing.fontSize);
              const existingRadius = Math.sqrt(existingTextSize.width ** 2 + existingTextSize.height ** 2) / 2;
              const dx = x - existing.x;
              const dy = y - existing.y;
              const distanceBetween = Math.sqrt(dx ** 2 + dy ** 2);
              const requiredDistance = textRadius + existingRadius + minDistance;
              if (distanceBetween < requiredDistance) {
                collision = true;
                break;
              }
            }
            if (!collision) {
              foundPosition = true;
              break;
            }
          }
        }
        
        // Final fallback
        if (!foundPosition) {
          distance = radius * 0.4;
          x = center + Math.cos(baseAngle) * distance;
          y = center + Math.sin(baseAngle) * distance;
        }
      }
      
      // Adjust position for specific texts
      let adjustedX = x;
      let adjustedY = y;
      if (tech === "ArcGIS SDK for JavaScript") {
        adjustedX = x + 15; // Move 15px to the right
        // Make sure it still fits within the circle
        const distFromCenter = Math.sqrt((adjustedX - center) ** 2 + (adjustedY - center) ** 2);
        const margin = size > 180 ? 20 : 15;
        if (distFromCenter + textRadius > radius - margin) {
          adjustedX = x + 10; // Use smaller adjustment if needed
        }
      } else if (tech === "Database Management") {
        adjustedX = x + 25; // Move 25px to the right
        adjustedY = y - 10; // Move 10px up
        const distFromCenter = Math.sqrt((adjustedX - center) ** 2 + (adjustedY - center) ** 2);
        const margin = size > 180 ? 20 : 15;
        if (distFromCenter + textRadius > radius - margin) {
          adjustedX = x + 20; // Use smaller adjustment if needed
          adjustedY = y - 8; // Use smaller adjustment if needed
        }
      } else if (tech === "Web GIS Development") {
        adjustedX = x - 12; // Move 12px to the left
        const distFromCenter = Math.sqrt((adjustedX - center) ** 2 + (adjustedY - center) ** 2);
        const margin = size > 180 ? 20 : 15;
        if (distFromCenter + textRadius > radius - margin) {
          adjustedX = x - 8; // Use smaller adjustment if needed
        }
      }
      
      positions.push({
        tech,
        x: adjustedX,
        y: adjustedY,
        fontSize,
        rotation,
      });
    });
    
    return positions;
  }, [technologies, radius, center]);

  return (
    <div className="circular-progress" data-size={size}>
      <div className="circular-progress__wrapper" style={{ width: size, height: size }}>
        <svg className="circular-progress__svg" width={size} height={size}>
          <defs>
            <linearGradient id="circularGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(61, 214, 255, 0.9)" />
              <stop offset="100%" stopColor="rgba(111, 255, 207, 0.8)" />
            </linearGradient>
          </defs>
          <circle
            className="circular-progress__bg"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth="8"
          />
          <circle
            className="circular-progress__fill"
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="url(#circularGradient)"
          />
        </svg>
        <div className="circular-progress__content">
          {techPositions.map((item, index) => (
            <span
              key={index}
              className="circular-progress__tech"
              style={{
                position: "absolute",
                left: `${item.x}px`,
                top: `${item.y}px`,
                fontSize: `${item.fontSize}rem`,
                transform: `translate(-50%, -50%) rotate(${item.rotation}deg)`,
              }}
            >
              {item.tech}
            </span>
          ))}
        </div>
      </div>
      {label && <p className="circular-progress__label">{label}</p>}
    </div>
  );
}

