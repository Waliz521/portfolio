import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

export function EarthGlobe() {
  const globeEl = useRef();

  useEffect(() => {
    if (globeEl.current) {
      // Set initial camera position for a nice view
      globeEl.current.camera().position.set(0, 0, 250);
      globeEl.current.controls().enableZoom = false;
      globeEl.current.controls().enableRotate = true;
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.5;
      globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2.5 });
    }
  }, []);

  return (
    <div className="earth-globe">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        showGraticules={false}
        animateIn={true}
      />
    </div>
  );
}

