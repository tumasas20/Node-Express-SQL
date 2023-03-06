const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 8080;
const app = express();
const client = new MongoClient(process.env.URI);
const person = {
  name: 'Geltona',
  surname: 'Maikė',
  age: 18,
};

app.use(cors());
app.use(express.json());

app.get('/cars', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db('demo1')
      .collection('cars')
      .find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post('/cars', async (req, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con
      .db('demo1')
      .collection('cars')
      .insertOne({ brand: 'Opel', model: 'Astra' });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.get('/people', async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con
      .db('peoples')
      .collection('people')
      .find().toArray();
    await con.close();
    return res.send(data);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.post('/people', async (req, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con
      .db('peoples')
      .collection('people')
      .insertOne(person);
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(port, () => console.log(`The service is runing on port http://localhost:${port}`));
