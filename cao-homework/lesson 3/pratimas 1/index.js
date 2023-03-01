const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const brands = ['Audi', 'BMV', 'MB', 'VW', 'Opel'];

app.get("/brands", (_req, res) => {
    res.send(brands);
});

app.post("/brands", (req, res) => {
    console.log(req.body);
    brands.push(...req.body);
    res.send('Created brand');
});

app.listen(8080, () => console.log("The service is runing on port http://localhost:8080"));