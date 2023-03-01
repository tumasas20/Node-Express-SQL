const express = require("express");
const cors = require("cors");
const port = 3003

const app = express();

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

const names = [];

app.get("/names", (_req, res) => {
    res.send(brands);
});

app.post("/names", (req, res) => {
    console.log(req.body);
    res.send('Created name');
});

app.listen(port, () => console.log(`The service is runing on port http://localhost:${port}`));