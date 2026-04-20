import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { LatLngBounds, divIcon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { getFreelanceClientMapPoints } from "../data/freelanceClientMap";

/** Inline SVG map pin — reads clearly on light gray basemaps (no ids: icon is reused per marker). */
const CLIENT_PIN_SVG = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 52" width="44" height="52" aria-hidden="true" class="clients-map-marker-svg">
  <path fill="#115e59" d="M22 2C12.6 2 5 9.4 5 18.2c0 12.4 17 29.8 17 29.8s17-17.4 17-29.8C39 9.4 31.4 2 22 2z"/>
  <circle cx="22" cy="18" r="7.5" fill="#f0fdfa" stroke="#0f766e" stroke-width="1.25"/>
  <circle cx="22" cy="18" r="3" fill="#14b8a6"/>
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

export function ClientsMap({ className = "" }) {
  const points = getFreelanceClientMapPoints();
  const positions = points.map((p) => p.position);
  const center = positions.length ? positions[0] : [20, 0];
  const zoom = positions.length ? 3 : 2;
  const pinIcon = useMemo(() => createClientPinIcon(), []);

  return (
    <div className={`clients-map ${className}`.trim()}>
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
