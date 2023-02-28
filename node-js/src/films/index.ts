import express from 'express';
import getFilm from './queries/get-film';
import getFilms from './queries/get-films';

const filmsRouter = express.Router();

filmsRouter.get('/', getFilms);
filmsRouter.get('/:id', getFilm);

// create one
filmsRouter.post('/', (req, res) => {
  console.log(req.body);

  res.send('create one film');
});
// update one
filmsRouter.patch('/:id', (req, res) => {
  res.send('update one film');
});
// delete one
filmsRouter.delete('/:id', (req, res) => {
  res.send('delete one film');
});

export default filmsRouter;
