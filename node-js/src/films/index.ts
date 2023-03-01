import express from 'express';
import getFilm from './queries/get-film';
import getFilms from './queries/get-films';
import createFilm from './mutations/create-film';
import deleteFilm from './mutations/delete-film';

const filmsRouter = express.Router();

filmsRouter.get('/', getFilms);
filmsRouter.get('/:id', getFilm);

filmsRouter.post('/', createFilm);

// update one
filmsRouter.patch('/:id', (req, res) => {
  res.send('update one film');
});

filmsRouter.delete('/:id', deleteFilm);

export default filmsRouter;
