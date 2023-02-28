import { RequestHandler } from 'express';
import { FilmModel } from '../types';
import { films } from '../data';

const getFilms: RequestHandler<
{},
FilmModel[],
undefined,
{}
> = (req, res) => {
    res.json(films);
};

export default getFilms;
