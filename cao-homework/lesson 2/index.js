const express = require("express");
const cors = require("cors");

const cars = ['BMV', "VW", "Porsche"];

const app = express();

app.use(cors());
app.use(express.static('public'));

app.get("/cars", (req, res) => {
    res.send(cars)
});

app.listen(8080, () => console.log("The server is runing on port http://localhost:8080"));