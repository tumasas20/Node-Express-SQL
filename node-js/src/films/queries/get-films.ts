import { RequestHandler } from 'express';
import { films } from 'films/data';
import { FilmModel } from 'films/types';

const getFilms: RequestHandler<
{},
FilmModel[],
undefined,
{}
> = (req, res) => {
    res.json(films);
};

export default getFilms;
