const express = require("express");
const router = express.Router();

// Map pool officiel Valorant (mai 2025)
const maps = [
  { name: "Ascent" },
  { name: "Bind" },
  { name: "Haven" },
  { name: "Icebox" },
  { name: "Lotus" },
  { name: "Sunset" },
  { name: "Split" },
];

// GET /api/maps
router.get("/", (req, res) => {
  res.json(maps);
});

module.exports = router;
