import { RequestHandler } from 'express';
import { films } from 'films/data';
import { FilmModel } from '../types';

const getFilm: RequestHandler<
{ id?: string },
FilmModel | ErrorResponse,
undefined,
{}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) {
        res.status(400).json({ error: 'Server setup error' });
        return;
    }

    const foundFilm = films.find((film) => String(film.id) === id);

    if (foundFilm === undefined) {
        res.status(404).json({ error: `Film with id '${id}' was not found` });
        return;
    }

    res.status(200).json(foundFilm);
};

export default getFilm;
