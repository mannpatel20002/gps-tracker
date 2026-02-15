const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let location = { lat: 0, lng: 0 };

app.get('/', (req, res) => {
  res.send("GPS Tracker Backend Running ✅");
});

app.post('/update', (req, res) => {
  location = req.body;
  res.json({ status: "Location Updated", data: location });
});

app.get('/location', (req, res) => {
  res.json(location);
});

app.listen(process.env.PORT || 3000);
