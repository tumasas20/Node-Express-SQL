import express from 'express';
import getFilm from './queries/get-film';
import getFilms from './queries/get-films';
import createFilm from './mutations/create-film';
import deleteFilm from './mutations/delete-film';
import putFilm from './mutations/put-film';

const filmsController = express.Router();

filmsController.get('/', getFilms);
filmsController.get('/:id', getFilm);

filmsController.post('/', createFilm);
filmsController.put('/:id', putFilm);
filmsController.delete('/:id', deleteFilm);

export default filmsController;
