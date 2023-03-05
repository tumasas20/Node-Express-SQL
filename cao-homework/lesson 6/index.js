/* eslint-disable no-console */
/* eslint-disable consistent-return */
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient } = require('mongodb');

const port = process.env.PORT || 8080;
const app = express();
const URI = 'mongodb+srv://tumasas20:P1HkUkrNG2EWSPVT@cluster0.mhk5nf3.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(URI);

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
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

app.post('/', async (req, res) => {
  try {
    const con = await client.connect();
    const dbRes = await con
      .db('demo1')
      .collection('cars')
      .insertOne({ brand: 'Audi', model: 'A6 avant' });
    await con.close();
    return res.send(dbRes);
  } catch (err) {
    res.status(500).send({ err });
  }
});

app.listen(port, () => console.log(`The service is runing on port http://localhost:${port}`));
