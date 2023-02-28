const express = require("express");

const app = express();

const cors = require("cors");
app.use(cors());

const cars = ['BMV', "VW", "Porsche"];

app.get("/cars", (req, res) => {
    res.send(cars)
});

app.listen(8080, () => console.log("The server is runing on port 8080"));