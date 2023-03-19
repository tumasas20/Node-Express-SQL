import express from 'express';
import jwtTokenMiddleware from 'middlewares/jwt-token-middleware';
import getFilm from './queries/get-film';
import getFilms from './queries/get-films';
import createFilm from './mutations/create-film';
import deleteFilm from './mutations/delete-film';
import putFilm from './mutations/put-film';

const filmsController = express.Router();

filmsController.get('/', getFilms);
filmsController.get('/:id', getFilm);

filmsController.post('/', jwtTokenMiddleware, createFilm);
filmsController.put('/:id', jwtTokenMiddleware, putFilm);
filmsController.delete('/:id', jwtTokenMiddleware, deleteFilm);

export default filmsController;
