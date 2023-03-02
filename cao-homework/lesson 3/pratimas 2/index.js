const express = require("express");
const cors = require("cors");
const port = 3000;

const app = express();

const people = [
    { name: "Petras", surname: "Slekys" },
    { name: "Jonas", surname: "Kazlauskas" },
    { name: "Antanas", surname: "Lapėnas" },
];

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/people", (req, res) => {
    res.send(people);
});

app.post("/people", (req, res) => {
    const { name, surname } = req.body;
    people.push({ name, surname });
    res.status(201).send("Person added successfully");
});

app.listen(port, () => console.log(`The service is runing on port http://localhost:${port}`));