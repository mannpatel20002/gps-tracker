const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let currentLocation = {
  lat: 22.0,
  lng: 72.0
};

// POST route (ESP32 sends here)
app.post("/location", (req, res) => {
  const { lat, lng } = req.body;

  if (lat && lng) {
    currentLocation = { lat, lng };
    console.log("Updated Location:", currentLocation);
    res.status(200).json({ message: "Location updated" });
  } else {
    res.status(400).json({ error: "Invalid data" });
  }
});

// GET route (Map reads from here)
app.get("/location", (req, res) => {
  res.json(currentLocation);
});

// Root route
app.get("/", (req, res) => {
  res.send("GPS Tracker Backend Running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Server running on port", PORT));
