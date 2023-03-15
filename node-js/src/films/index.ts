import express from 'express';
import getFilm from './queries/get-film';
import getFilms from './queries/get-films';
// import createFilm from './mutations/create-film';
import deleteFilm from './mutations/delete-film';
// import putFilm from './mutations/put-film';
// import patchFilm from './mutations/patch-film';

const filmsRouter = express.Router();

filmsRouter.get('/', getFilms);
filmsRouter.get('/:id', getFilm);

// filmsRouter.post('/', createFilm);
// filmsRouter.put('/:id', putFilm);
// filmsRouter.patch('/:id', patchFilm);
filmsRouter.delete('/:id', deleteFilm);

export default filmsRouter;
