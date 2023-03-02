const express = require("express");
const cors = require("cors");
const data = require('./data.json');
const port = 3002;

const app = express();

app.use(cors());
app.use(express.json());

app.get("/people", (req, res) => {
    res.send(data);
  });

app.get("/cars/:brand", (req, res) => {
    const brand = req.params.brand;
    const filterPeople = data.people.filter(person => person.car === brand);
    
    if(filterPeople) {
        res.send(filterPeople);
    } else {
        res.status(404).send('Brand not found');
    }
});

app.get('/people/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = data.people.find(person => person.id === id);
  
    if (!user) {
      return res.status(404).send(`Person with id: '${id}' was not found`);
    }
  
    res.send(user);
  });

  app.get('/emails', (req, res) => {
    const emails = data.people.map(item => item.email);
    res.send(emails);
  });

  app.get('/females', (req, res) => {
    const femail = data.people.filter(person => person.gender === 'Female');
    const names = femail.map(f => `${f.first_name} ${f.last_name}`);
    res.json(names);
  });



app.listen(port, () => console.log(`The service is runing on port http://localhost:${port}`));