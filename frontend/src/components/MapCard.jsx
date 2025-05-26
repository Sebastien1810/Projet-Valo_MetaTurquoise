import React from "react";
function MapCard({ name, isBanned, onBan }) {
  if (isBanned) return null;
  return (
    <div className="map-card">
      <h3>{name}</h3>
      <button onClick={() => onBan(name)}>Ban</button>
    </div>
  );
}

export default MapCard;
