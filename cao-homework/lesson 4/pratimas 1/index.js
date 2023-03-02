const express = require("express");
const cors = require("cors");
const port = 3001;

const app = express();

const cars = {
    bmw: ["i3", "i8", "1 series", "3 series", "5 series"],
    mb: ["A class", "C class", "E class", "S class"],
    vw: ["Golf", "Arteon", "UP"]
  };

app.use(cors());
app.use(express.json());

app.get("/cars/:brand", (req, res) => {
    const brand = req.params.brand;
    const carModels = cars[brand];
    if(carModels) {
        res.send(carModels);
    } else {
        res.status(404).send('Brand not found');
    }
});



app.listen(port, () => console.log(`The service is runing on port http://localhost:${port}`));