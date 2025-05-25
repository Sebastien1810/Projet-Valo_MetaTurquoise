const express = require("express");
const router = express.Router();

let currentSession = null;

//request post

router.post("/", (req, res) => {
  const { teamA, teamB, mapPool, format } = req.body;

  currentSession = {
    teamA,
    teamB,
    mapPool,
    format,
    currentStep: 0, //représente l'étape actuelle dans le déroulé de la phase de pick/ban
    picksAndBans: [],
    status: "in-progress",
  };
  res.status(201).json(currentSession);
});

// get request

router.get("/", (req, res) => {
  if (!currentSession) {
    return res.status(404).json({ message: "No session in progress" });
  }
  res.json(currentSession);
});
module.exports = router;
