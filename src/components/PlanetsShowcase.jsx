import { useEffect, useRef, useState } from "react";

// Fixed positions for planets
const planetPositions = [
  { top: "15%", left: "20%" },      // Mars
  { top: "25%", right: "15%" },      // Jupiter
  { bottom: "20%", left: "25%" },    // Saturn
  { top: "10%", right: "30%" },      // Neptune
  { bottom: "30%", right: "20%" },   // Venus
  { top: "50%", left: "10%" },       // Mercury
];

// Generate random shooting star properties
const generateShootingStar = (index) => {
  // Random starting position (can be from any edge)
  const edge = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
  const position = Math.random() * 100; // 0-100% along the edge
  
  let startX, startY, endX, endY;
  
  switch(edge) {
    case 0: // Top edge
      startX = position;
      startY = -10;
      endX = position + (Math.random() - 0.5) * 50;
      endY = 110;
      break;
    case 1: // Right edge
      startX = 110;
      startY = position;
      endX = -10;
      endY = position + (Math.random() - 0.5) * 50;
      break;
    case 2: // Bottom edge
      startX = position;
      startY = 110;
      endX = position + (Math.random() - 0.5) * 50;
      endY = -10;
      break;
    case 3: // Left edge
      startX = -10;
      startY = position;
      endX = 110;
      endY = position + (Math.random() - 0.5) * 50;
      break;
  }
  
  return {
    startX,
    startY,
    endX,
    endY,
    delay: index * 0.5 + Math.random() * 1.5,
    duration: 2 + Math.random() * 2,
  };
};

export function PlanetsShowcase() {
  const showcaseRef = useRef(null);
  const [activeShootingStars, setActiveShootingStars] = useState([]);
  const starQueueRef = useRef([]);
  const timeoutsRef = useRef([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    // Initialize queue with many stars
    starQueueRef.current = Array.from({ length: 20 }, (_, i) => ({
      ...generateShootingStar(i),
      id: i,
    }));

    // Function to add a new star when one finishes
    const scheduleNextStar = (finishedStarId) => {
      setActiveShootingStars((prev) => {
        const remaining = prev.filter((s) => s.id !== finishedStarId);
        if (starQueueRef.current.length > 0 && remaining.length < 2) {
          const nextStar = starQueueRef.current.shift();
          // Schedule removal of this new star
          const timeout = setTimeout(() => {
            scheduleNextStar(nextStar.id);
          }, nextStar.duration * 1000);
          timeoutsRef.current.push(timeout);
          return [...remaining, nextStar];
        }
        return remaining;
      });
    };

    // Start showing shooting stars after 5 seconds
    const startTimer = setTimeout(() => {
      // Add first 2 stars
      const firstTwo = starQueueRef.current.splice(0, 2);
      setActiveShootingStars(firstTwo);

      // Set up timers for when each star finishes
      firstTwo.forEach((star) => {
        const timeout = setTimeout(() => {
          scheduleNextStar(star.id);
        }, star.duration * 1000);
        timeoutsRef.current.push(timeout);
      });

      // Set up interval to continuously add stars when slots are available
      intervalRef.current = setInterval(() => {
        setActiveShootingStars((prev) => {
          if (prev.length < 2 && starQueueRef.current.length > 0) {
            const nextStar = starQueueRef.current.shift();
            // Schedule removal of this new star
            const timeout = setTimeout(() => {
              scheduleNextStar(nextStar.id);
            }, nextStar.duration * 1000);
            timeoutsRef.current.push(timeout);
            return [...prev, nextStar];
          }
          return prev;
        });
      }, 2000); // Check every 2 seconds
    }, 5000);

    return () => {
      clearTimeout(startTimer);
      if (intervalRef.current) clearInterval(intervalRef.current);
      timeoutsRef.current.forEach(clearTimeout);
      timeoutsRef.current = [];
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!showcaseRef.current) return;
    
    const rect = showcaseRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Update CSS variables for kick effect on all kickable elements
    const kickableElements = showcaseRef.current.querySelectorAll('[data-kickable]');
    kickableElements.forEach((element) => {
      const elementRect = element.getBoundingClientRect();
      const elementCenterX = elementRect.left + elementRect.width / 2 - rect.left;
      const elementCenterY = elementRect.top + elementRect.height / 2 - rect.top;
      
      const dx = x - elementCenterX;
      const dy = y - elementCenterY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = 150; // Interaction radius
      
      if (distance < maxDistance) {
        const force = (1 - distance / maxDistance) * 20;
        const kickX = (dx / distance) * force;
        const kickY = (dy / distance) * force;
        
        element.style.setProperty('--kick-x', `${kickX}px`);
        element.style.setProperty('--kick-y', `${kickY}px`);
      } else {
        element.style.setProperty('--kick-x', '0px');
        element.style.setProperty('--kick-y', '0px');
      }
    });
  };

  // Calculate angle for trail direction
  const calculateAngle = (star) => {
    const dx = star.endX - star.startX;
    const dy = star.endY - star.startY;
    return Math.atan2(dy, dx) * (180 / Math.PI);
  };

  return (
    <div 
      ref={showcaseRef}
      className="planets-showcase" 
      onMouseMove={handleMouseMove}
    >
      {/* Mars - Red Planet */}
      <div 
        className="planet-sphere planet-sphere--mars" 
        data-kickable
        style={planetPositions[0]}
      >
        <div className="planet-sphere__surface"></div>
      </div>

      {/* Jupiter - Gas Giant */}
      <div 
        className="planet-sphere planet-sphere--jupiter" 
        data-kickable
        style={planetPositions[1]}
      >
        <div className="planet-sphere__surface"></div>
        <div className="planet-rings planet-rings--jupiter"></div>
      </div>

      {/* Saturn - With Rings */}
      <div 
        className="planet-sphere planet-sphere--saturn" 
        data-kickable
        style={planetPositions[2]}
      >
        <div className="planet-sphere__surface"></div>
        <div className="planet-rings planet-rings--saturn"></div>
      </div>

      {/* Neptune - Blue Planet */}
      <div 
        className="planet-sphere planet-sphere--neptune" 
        data-kickable
        style={planetPositions[3]}
      >
        <div className="planet-sphere__surface"></div>
      </div>

      {/* Venus - Yellowish Planet */}
      <div 
        className="planet-sphere planet-sphere--venus" 
        data-kickable
        style={planetPositions[4]}
      >
        <div className="planet-sphere__surface"></div>
      </div>

      {/* Mercury - Small Grey Planet */}
      <div 
        className="planet-sphere planet-sphere--mercury" 
        data-kickable
        style={planetPositions[5]}
      >
        <div className="planet-sphere__surface"></div>
      </div>

      {/* Shooting Stars - Max 2 at a time */}
      {activeShootingStars.map((star) => {
        const angle = calculateAngle(star);
        return (
          <div
            key={star.id}
            className="shooting-star"
            style={{
              '--start-x': `${star.startX}%`,
              '--start-y': `${star.startY}%`,
              '--end-x': `${star.endX}%`,
              '--end-y': `${star.endY}%`,
              '--angle': `${angle}deg`,
              '--delay': `0s`,
              '--duration': `${star.duration}s`,
            }}
          >
            <div className="shooting-star__head"></div>
            <div className="shooting-star__trail"></div>
          </div>
        );
      })}
    </div>
  );
}
