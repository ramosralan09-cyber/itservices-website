'use client';

import { MapContainer, TileLayer, Circle, Popup, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEffect } from 'react';

const CoverageMapContent = () => {
  useEffect(() => {
    delete (L.Icon.Default.prototype as any)._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
      iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    });
  }, []);

  const createColoredIcon = (color: string) => {
    return L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: ${color};
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 2px solid white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.4);
        "></div>
      `,
      iconSize: [10, 10],
      iconAnchor: [5, 5],
      popupAnchor: [0, -5]
    });
  };

  // Zonas reorganizadas según la geografía real de Puerto Rico
  const coverageAreas = [
    {
      center: [18.2500, -67.1500] as [number, number], // West region
      radius: 28000,
      color: '#10b981', // Green
      name: "Región Oeste",
      zones: "Mayagüez, Aguadilla, Cabo Rojo, Rincón, Añasco, Aguada, San Sebastián, Moca, Isabela, Las Marías"
    },
    {
      center: [18.4500, -66.6500] as [number, number], // North region
      radius: 32000,
      color: '#3b82f6', // Blue
      name: "Región Norte",
      zones: "Arecibo, Manatí, Barceloneta, Vega Baja, Vega Alta, Dorado, Toa Baja, Toa Alta, Camuy, Hatillo"
    },
    {
      center: [18.2500, -66.3000] as [number, number], // Central region
      radius: 30000,
      color: '#eab308', // Yellow/Gold
      name: "Región Central",
      zones: "Utuado, Adjuntas, Jayuya, Orocovis, Barranquitas, Comerío, Aibonito, Corozal, Naranjito, Morovis"
    },
    {
      center: [18.4500, -66.0500] as [number, number], // Metro region
      radius: 22000,
      color: '#8b5cf6', // Purple
      name: "Área Metropolitana",
      zones: "San Juan, Bayamón, Carolina, Guaynabo, Trujillo Alto, Cataño, Canóvanas, Loíza"
    },
    {
      center: [18.0500, -66.6000] as [number, number], // South region
      radius: 35000,
      color: '#8b5cf6', // Cyan/Teal
      name: "Región Sur",
      zones: "Ponce, Yauco, Guayanilla, Peñuelas, Guánica, Juana Díaz, Santa Isabel, Salinas, Coamo, Villalba"
    },
    {
      center: [18.1500, -65.9000] as [number, number], // East region
      radius: 30000,
      color: '#ec4899', // Pink
      name: "Región Este",
      zones: "Caguas, Humacao, Fajardo, Gurabo, Juncos, Las Piedras, Ceiba, Naguabo, Yabucoa, Maunabo, Patillas"
    }
  ];

  // Marcadores individuales por municipio
  const municipalityMarkers = [
    // Región Oeste (Green #10b981)
    { lat: 18.2013, lng: -67.1397, name: 'Mayagüez', color: '#10b981' },
    { lat: 18.4277, lng: -67.1419, name: 'Aguadilla', color: '#10b981' },
    { lat: 18.0880, lng: -67.1417, name: 'Cabo Rojo', color: '#10b981' },
    { lat: 18.3364, lng: -67.2493, name: 'Rincón', color: '#10b981' },
    { lat: 18.2834, lng: -67.1404, name: 'Añasco', color: '#10b981' },
    { lat: 18.3788, lng: -67.1880, name: 'Aguada', color: '#10b981' },
    { lat: 18.3360, lng: -66.9900, name: 'San Sebastián', color: '#10b981' },
    { lat: 18.3950, lng: -67.1120, name: 'Moca', color: '#10b981' },
    { lat: 18.5007, lng: -67.0326, name: 'Isabela', color: '#10b981' },
    { lat: 18.2505, lng: -66.9830, name: 'Las Marías', color: '#10b981' },

    // Región Norte (Blue #3b82f6)
    { lat: 18.4500, lng: -66.7205, name: 'Arecibo', color: '#3b82f6' },
    { lat: 18.4308, lng: -66.4846, name: 'Manatí', color: '#3b82f6' },
    { lat: 18.4503, lng: -66.5371, name: 'Barceloneta', color: '#3b82f6' },
    { lat: 18.4466, lng: -66.3931, name: 'Vega Baja', color: '#3b82f6' },
    { lat: 18.4449, lng: -66.3315, name: 'Vega Alta', color: '#3b82f6' },
    { lat: 18.4589, lng: -66.2678, name: 'Dorado', color: '#3b82f6' },
    { lat: 18.4439, lng: -66.1869, name: 'Toa Baja', color: '#3b82f6' },
    { lat: 18.3881, lng: -66.2481, name: 'Toa Alta', color: '#3b82f6' },
    { lat: 18.4830, lng: -66.8445, name: 'Camuy', color: '#3b82f6' },
    { lat: 18.4864, lng: -66.8289, name: 'Hatillo', color: '#3b82f6' },

    // Región Central (Yellow #eab308)
    { lat: 18.2656, lng: -66.7004, name: 'Utuado', color: '#eab308' },
    { lat: 18.1627, lng: -66.7223, name: 'Adjuntas', color: '#eab308' },
    { lat: 18.2172, lng: -66.5914, name: 'Jayuya', color: '#eab308' },
    { lat: 18.2269, lng: -66.3917, name: 'Orocovis', color: '#eab308' },
    { lat: 18.1867, lng: -66.3064, name: 'Barranquitas', color: '#eab308' },
    { lat: 18.2161, lng: -66.2261, name: 'Comerío', color: '#eab308' },
    { lat: 18.1404, lng: -66.2663, name: 'Aibonito', color: '#eab308' },
    { lat: 18.3465, lng: -66.3294, name: 'Corozal', color: '#eab308' },
    { lat: 18.3016, lng: -66.2485, name: 'Naranjito', color: '#eab308' },
    { lat: 18.3271, lng: -66.4060, name: 'Morovis', color: '#eab308' },

    // Área Metropolitana (Purple #8b5cf6)
    { lat: 18.4655, lng: -66.1057, name: 'San Juan', color: '#8b5cf6' },
    { lat: 18.3988, lng: -66.1603, name: 'Bayamón', color: '#8b5cf6' },
    { lat: 18.3813, lng: -65.9601, name: 'Carolina', color: '#8b5cf6' },
    { lat: 18.4000, lng: -66.1145, name: 'Guaynabo', color: '#8b5cf6' },
    { lat: 18.3634, lng: -66.0123, name: 'Trujillo Alto', color: '#8b5cf6' },
    { lat: 18.4413, lng: -66.1402, name: 'Cataño', color: '#8b5cf6' },
    { lat: 18.3833, lng: -65.9000, name: 'Canóvanas', color: '#8b5cf6' },
    { lat: 18.4331, lng: -65.8808, name: 'Loíza', color: '#8b5cf6' },

    // Región Sur (Cyan #8b5cf6)
    { lat: 17.9895, lng: -66.6140, name: 'Ponce', color: '#8b5cf6' },
    { lat: 18.0350, lng: -66.8499, name: 'Yauco', color: '#8b5cf6' },
    { lat: 17.9746, lng: -66.7889, name: 'Guayanilla', color: '#8b5cf6' },
    { lat: 18.0570, lng: -66.7218, name: 'Peñuelas', color: '#8b5cf6' },
    { lat: 17.9715, lng: -66.9082, name: 'Guánica', color: '#8b5cf6' },
    { lat: 18.0521, lng: -66.5061, name: 'Juana Díaz', color: '#8b5cf6' },
    { lat: 17.9662, lng: -66.4048, name: 'Santa Isabel', color: '#8b5cf6' },
    { lat: 17.9757, lng: -66.2982, name: 'Salinas', color: '#8b5cf6' },
    { lat: 18.0799, lng: -66.3570, name: 'Coamo', color: '#8b5cf6' },
    { lat: 18.1370, lng: -66.4927, name: 'Villalba', color: '#8b5cf6' },

    // Región Este (Pink #ec4899)
    { lat: 18.2367, lng: -66.0321, name: 'Caguas', color: '#ec4899' },
    { lat: 18.1496, lng: -65.8272, name: 'Humacao', color: '#ec4899' },
    { lat: 18.3258, lng: -65.6525, name: 'Fajardo', color: '#ec4899' },
    { lat: 18.2546, lng: -66.0039, name: 'Gurabo', color: '#ec4899' },
    { lat: 18.2273, lng: -65.9211, name: 'Juncos', color: '#ec4899' },
    { lat: 18.1838, lng: -65.8688, name: 'Las Piedras', color: '#ec4899' },
    { lat: 18.2632, lng: -65.6547, name: 'Ceiba', color: '#ec4899' },
    { lat: 18.2114, lng: -65.7349, name: 'Naguabo', color: '#ec4899' },
    { lat: 18.0501, lng: -65.8794, name: 'Yabucoa', color: '#ec4899' },
    { lat: 18.0073, lng: -65.8994, name: 'Maunabo', color: '#ec4899' },
    { lat: 18.0051, lng: -66.0139, name: 'Patillas', color: '#ec4899' }
  ];


  return (
    <div className="w-full h-[600px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-600/20">
      <MapContainer
        center={[18.2208, -66.4140]}
        zoom={9}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {coverageAreas.map((area, index) => (
          <Circle
            key={`area-${index}`}
            center={area.center}
            radius={area.radius}
            pathOptions={{
              color: area.color,
              fillColor: area.color,
              fillOpacity: 0.12,
              weight: 2.5
            }}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-2" style={{ color: area.color }}>
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Municipios:</strong>
                </p>
                <p className="text-sm text-gray-700">{area.zones}</p>
              </div>
            </Popup>
          </Circle>
        ))}

        {municipalityMarkers.map((municipality, index) => (
          <Marker
            key={`municipality-${index}`}
            position={[municipality.lat, municipality.lng]}
            icon={createColoredIcon(municipality.color)}
          >
            <Popup>
              <div className="p-1">
                <p className="font-semibold text-sm" style={{ color: municipality.color }}>
                  {municipality.name}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CoverageMapContent;
