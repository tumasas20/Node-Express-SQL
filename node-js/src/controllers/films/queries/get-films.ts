import { RequestHandler } from 'express';
import FilmModel from 'controllers/films/films-model';
import { FilmViewModel } from 'controllers/films/types';

const getFilms: RequestHandler<
{},
FilmViewModel[],
undefined,
{}
> = async (req, res) => {
    const filmViewModelArray = await FilmModel.getFilms();
    res.json(filmViewModelArray);
};

export default getFilms;
