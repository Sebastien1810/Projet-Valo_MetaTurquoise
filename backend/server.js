const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// import des routes
const mapsRoute = require("./routes/maps");
const sessionRoute = require("./routes/session");

//utilisation des routes
app.use("/api/maps", mapsRoute);
app.use("/api/session", sessionRoute);

app.get("/", (req, res) => {
  res.send("Backend OK");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
