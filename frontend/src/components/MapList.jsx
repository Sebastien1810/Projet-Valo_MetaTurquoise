import MapCard from "./MapCard"; // adapte le chemin si nécessaire

const maps = [
  { name: "Ascent" },
  { name: "Bind" },
  { name: "Haven" },
  { name: "Split" },
  { name: "Lotus" },
  { name: "Sunset" },
];

function MapList() {
  return (
    <div>
      {maps.map((map, index) => (
        <div key={index}>
          <h3>{map.name}</h3>
        </div>
      ))}
    </div>
  );
}
export default MapList;
