import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { eventdata } from "../data/eventdata";
import L from "leaflet";

// Fix default marker icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const center = [10.0, 76.3]; // Kerala center

const Map = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <div className="min-h-screen bg-black text-yellow-50 px-6 py-6">
      <h1
        className="text-4xl font-extrabold text-center mb-6
        bg-linear-to-r from-yellow-400 to-yellow-600
        text-transparent bg-clip-text"
      >
        Events Map
      </h1>

      <MapContainer
        center={center}
        zoom={8}
        className="w-full h-[80vh] rounded-xl border border-yellow-600"
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />

        {/* Event Markers */}
        {eventdata.map((event) => (
          <Marker
            key={event.id}
            position={[event.lat, event.lng]}
            eventHandlers={{
              click: () => setSelectedEvent(event),
            }}
          />
        ))}

        {/* Popup */}
        {selectedEvent && (
          <Popup
            position={[selectedEvent.lat, selectedEvent.lng]}
            onClose={() => setSelectedEvent(null)}
          >
            <div className="text-black space-y-2 max-w-[200px]">
              <h3 className="font-bold text-sm">
                {selectedEvent.eventName}
              </h3>

              <p className="text-xs">
                📍 {selectedEvent.venue}
              </p>

              <p className="text-xs">
                💰{" "}
                {selectedEvent.price === 0
                  ? "Free"
                  : `₹${selectedEvent.price}`}
              </p>

              <Link
                to={`/events/${selectedEvent.id}`}
                className="inline-block mt-2 text-xs font-semibold
                bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-300"
              >
                View Details
              </Link>
            </div>
          </Popup>
        )}
      </MapContainer>
    </div>
  );
};

export default Map;
