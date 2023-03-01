import { RequestHandler } from 'express';
import { films } from 'films/data';
import { FilmModel } from 'films/types';

const deleteFilm: RequestHandler<
    { id?: string },
    FilmModel | ErrorResponse,
    {},
    {}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) {
        res.status(400).json({ error: 'Server setup error' });
    }

    const foundFilmIndex = films.findIndex((film) => String(film.id) === id);

    if (foundFilmIndex === -1) {
        res.status(404).json({ error: `Film with id '${id}' was not found` });
        return;
    }
    const foundFilm = films[foundFilmIndex];
    films.splice(foundFilmIndex, 1);

    res.status(200).json(foundFilm);
};

export default deleteFilm;
