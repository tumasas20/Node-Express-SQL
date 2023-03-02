import express from 'express';
import getFilm from './queries/get-film';
import getFilms from './queries/get-films';
import createFilm from './mutations/create-film';
import deleteFilm from './mutations/delete-film';
import replaceFilm from './mutations/replace-film';

const filmsRouter = express.Router();

filmsRouter.get('/', getFilms);
filmsRouter.get('/:id', getFilm);

filmsRouter.post('/', createFilm);

// replace one
filmsRouter.put('/:id', replaceFilm);

filmsRouter.delete('/:id', deleteFilm);

export default filmsRouter;
