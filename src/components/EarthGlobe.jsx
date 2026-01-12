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
      globeEl.current.controls().autoRotateSpeed = 0.3;
      globeEl.current.pointOfView({ lat: 20, lng: 0, altitude: 2.5 });
      
      // Optional: Add subtle lighting
      globeEl.current.scene().children.forEach((child) => {
        if (child.type === "Mesh") {
          child.material.emissive = { r: 0.1, g: 0.1, b: 0.1 };
        }
      });
    }
  }, []);

  return (
    <div className="earth-globe">
      <Globe
        ref={globeEl}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
        showAtmosphere={false}
        showGraticules={true}
        graticuleColor="rgba(140, 200, 140, 0.2)"
        animateIn={true}
      />
    </div>
  );
}

