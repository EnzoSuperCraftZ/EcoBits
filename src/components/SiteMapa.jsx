import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useState, useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import "./SiteMapa.css";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});


function FlyToLocation({ lat, lng, selected, markerRefs }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !markerRefs.current[selected]) return;

    map.flyTo([lat, lng], 15, { duration: 1.2 });

    setTimeout(() => {
      const marker = markerRefs.current[selected];
      if (marker) marker.openPopup();
    }, 1200);

  }, [lat, lng, selected, map]);

  return null;
}


const LOCATIONS = [
  { id: 1, name: "EMEI Ronilza Cordeiro", address: "Rua João Paulo I, Novo Horizonte", materials: "Capacitores, resistores, transistores", lat: -8.72540, lng: -63.87334 },
  { id: 2, name: "Praça do Cohab", address: "Rua Carqueja, 2716 – Cohab", materials: "Placas-mãe, placas de vídeo, chipsets queimados", lat: -8.77452, lng: -63.85210 },
  { id: 3, name: "Centro Cultural Laio", address: "Rua Pau Ferro c/ Rua Anari – Castanheira", materials: "Memórias RAM, módulos DDR antigos, EEPROMs", lat: -8.78815, lng: -63.87042 },
  { id: 4, name: "USF Aponiã", address: "Rua Andréia, 5383 – Aponiã", materials: "Fontes ATX, transformadores, reguladores de tensão", lat: -8.73451, lng: -63.88791 },
  { id: 5, name: "Parque da Cidade", address: "Av. Calama – Flodoaldo Pontes Pinto", materials: "Sensores, relés, microcontroladores", lat: -8.73292, lng: -63.86562 },
  { id: 6, name: "Paróquia São José Operário", address: "Av. Campos Sales, 4777 – Eletronorte", materials: "Circuitos integrados (CI), MOSFETs, diodos Zener", lat: -8.76110, lng: -63.87170 },
  { id: 7, name: "Skate Parque", address: "Av. Guaporé – Cuniã", materials: "Displays LCD, LEDs, drivers de display", lat: -8.77955, lng: -63.83810 },
  { id: 8, name: "Praça do Conjunto Santo Antônio", address: "Rua Padre Chiquinho", materials: "Placas de circuito impresso (PCI), trilhas danificadas, conectores", lat: -8.75980, lng: -63.89710 },
  { id: 9, name: "Faculdade Católica", address: "Av. Jorge Teixeira, 4100 – Industrial", materials: "HDs, SSDs queimados, módulos controladores", lat: -8.76060, lng: -63.85410 },
  { id: 10, name: "Delegacia de Crimes Ambientais", address: "Av. Amador dos Reis, 3214 – JK", materials: "Coolers, motores brushless, dissipadores de alumínio", lat: -8.73855, lng: -63.82180 }
];



export default function SiteMapa({ onBack }) {
  const [selected, setSelected] = useState(1);
  const markerRefs = useRef({});

  const activeLocation = LOCATIONS.find((l) => l.id === selected);

  return (
    <div className="site-map">

      <div className="sidebar-menu">

        <div className="sidebar-header">
          <img className="sidebar-logo" src="https://f.feridinha.com/QLkpc.png" alt="Ecobits" />

          <svg className="back-icon" width="36" height="37" onClick={onBack}>
            <path
              d="M19.8771 4.20668C20.3396 3.71588 20.5664 3.08055 20.5575 2.44521C20.5485 1.80988 20.3068 1.18056 19.8294 0.701801L19.7935 0.665672C19.3221 0.214012 18.7193 -0.00579834 18.1195 0.00323486C17.5197 0.0122681 16.9229 0.250141 16.4633 0.716858C11.1934 6.0344 5.98022 11.4393 0.743145 16.796C0.72226 16.811 0.704353 16.8261 0.686451 16.8441C0.223919 17.3349 -0.00287628 17.9763 0.00607681 18.6116C0.0150299 19.247 0.259727 19.8793 0.737179 20.3581L0.817749 20.4363C6.03094 25.7178 11.2382 31.0172 16.4663 36.2896C16.9229 36.7533 17.5197 36.9912 18.1195 37.0002C18.7193 37.0093 19.3221 36.7894 19.7935 36.3348L19.8383 36.2896C20.3068 35.8139 20.5485 35.1876 20.5575 34.5552C20.5664 33.9229 20.3396 33.2846 19.8771 32.7938L5.78625 18.5604L19.8771 4.20668Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="menu-container">
          {LOCATIONS.map((loc) => (
            <button
              key={loc.id}
              className={`menu-item ${selected === loc.id ? "selected" : ""}`}
              onClick={() => setSelected(loc.id)}
            >
              <strong>{loc.name}</strong>
              <br />
              <small>{loc.address}</small>
            </button>
          ))}
        </div>
      </div>


      <MapContainer
        center={[activeLocation.lat, activeLocation.lng]}
        zoom={13}
        className="map-container"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToLocation
          lat={activeLocation.lat}
          lng={activeLocation.lng}
          selected={selected}
          markerRefs={markerRefs}
        />

        {LOCATIONS.map((loc) => (
          <Marker
            key={loc.id}
            position={[loc.lat, loc.lng]}
            ref={(el) => (markerRefs.current[loc.id] = el)}
            eventHandlers={{ click: () => setSelected(loc.id) }}
          >
            <Popup>
              <strong>{loc.name}</strong>
              <br />
              {loc.address} <br />
              <em>{loc.materials}</em>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
