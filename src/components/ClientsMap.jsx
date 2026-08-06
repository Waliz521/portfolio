import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngBounds, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { getFreelanceClientMapPoints } from "../data/freelanceClientMap";

/** Person-in-pin marker — reads as a client/contact on the map (reused per marker). */
const CLIENT_PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 52" width="44" height="52" aria-hidden="true" class="clients-map-marker-svg">
  <path class="clients-map-marker__pin" d="M22 1.5C11.8 1.5 3 10 3 19.2c0 11.5 16.2 28.5 18.5 31.2.4.5 1.1.5 1.5 0C25.3 47.7 41 30.7 41 19.2 41 10 32.2 1.5 22 1.5z"/>
  <circle class="clients-map-marker__badge" cx="22" cy="19" r="10"/>
  <circle class="clients-map-marker__head" cx="22" cy="16.2" r="3.25"/>
  <path class="clients-map-marker__shoulders" d="M22 20.4c-4.35 0-6.75 2.25-6.75 5v.6h13.5v-.6c0-2.75-2.4-5-6.75-5z"/>
</svg>
`.trim();

function createClientPinIcon() {
  return divIcon({
    className: "clients-map-marker-icon",
    html: CLIENT_PIN_SVG,
    iconSize: [44, 52],
    iconAnchor: [22, 52],
    popupAnchor: [0, -48],
  });
}

function FitBounds({ positions }) {
  const map = useMap();
  const boundsKey = JSON.stringify(positions);

  useEffect(() => {
    if (!boundsKey || boundsKey === "[]") return;
    const parsed = JSON.parse(boundsKey);
    const bounds = new LatLngBounds(parsed);
    map.fitBounds(bounds, { padding: [56, 56], maxZoom: 6 });
  }, [map, boundsKey]);

  return null;
}

function MapResize() {
  const map = useMap();

  useEffect(() => {
    const refresh = () => map.invalidateSize();
    refresh();
    requestAnimationFrame(refresh);
    const timer = window.setTimeout(refresh, 250);
    window.addEventListener("resize", refresh);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", refresh);
    };
  }, [map]);

  return null;
}

export function ClientsMap({ id, className = "" }) {
  const points = getFreelanceClientMapPoints();
  const positions = points.map((p) => p.position);
  const center = positions.length ? positions[0] : [20, 0];
  const zoom = positions.length ? 3 : 2;
  const pinIcon = useMemo(() => createClientPinIcon(), []);

  return (
    <div id={id} className={`clients-map ${className}`.trim()}>
      <MapContainer
        center={center}
        zoom={zoom}
        className="clients-map__leaflet"
        scrollWheelZoom
        worldCopyJump
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        {positions.length > 0 && <FitBounds positions={positions} />}
        <MapResize />
        {points.map((point) => (
          <Marker key={point.key} position={point.position} icon={pinIcon}>
            <Popup className="clients-map-popup" maxWidth={320}>
              <div className="clients-map-popup__inner">
                <header className="clients-map-popup__head">
                  <span className="clients-map-popup__eyebrow">Freelance client</span>
                  <strong className="clients-map-popup__name">{point.clientName}</strong>
                </header>
                <p className="clients-map-popup__loc">{point.locationLabel}</p>
                <div className="clients-map-popup__rule" aria-hidden />
                <p className="clients-map-popup__list-label">Projects</p>
                <ul className="clients-map-popup__projects">
                  {point.projects.map((proj) => (
                    <li key={proj.id}>
                      <Link to={`/project/${proj.id}`}>{proj.title}</Link>
                      {proj.amount ? (
                        <span className="clients-map-popup__amt"> · {proj.amount}</span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
