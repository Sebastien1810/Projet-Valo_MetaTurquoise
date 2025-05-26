import React, { useState } from "react";
import MapCard from "./MapCard"; // adapte le chemin si nécessaire

const initialMaps = [
  { name: "Ascent" },
  { name: "Bind" },
  { name: "Haven" },
  { name: "Split" },
  { name: "Lotus" },
  { name: "Sunset" },
];

function MapList() {
  const [maps, setMaps] = useState(initialMaps);

  const handleBan = (name) => {
    setMaps((prevMaps) =>
      prevMaps.map((map) =>
        map.name === name ? { ...map, banned: true } : map
      )
    );
  };

  return (
    <div>
      {maps.map((map) => (
        <MapCard
          key={map.name}
          name={map.name}
          onBan={handleBan}
          isBanned={map.banned}
        />
      ))}
    </div>
  );
}
export default MapList;
