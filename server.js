const express = require('express');
const app = express();
app.use(express.json());

let location = { lat: 0, lng: 0 };

app.get('/', (req, res) => {
  res.send("GPS Tracker Backend Running ✅");
});

app.post('/update', (req, res) => {
  location = req.body;
  res.send("Location Updated");
});

app.get('/location', (req, res) => {
  res.json(location);
});

app.listen(process.env.PORT || 3000);
