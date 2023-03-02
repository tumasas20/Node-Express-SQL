import { RequestHandler } from 'express';
import filmDataValidationSchema from 'films/validation-schemas/film-data-validation-schema';
import { FilmModel, PartialFilmData } from '../types';
import { films } from '../data';

const replaceFilm: RequestHandler<
{ id?: string },
FilmModel | ErrorResponse,
PartialFilmData,
{}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) {
        res.status(400).json({ error: 'Server setup error' });
        return;
    }

    try {
        const filmData = filmDataValidationSchema.validateSync(req.body);

        const foundFilmIndex = films.findIndex((film) => String(film.id) === id);

        if (foundFilmIndex === -1) {
            res.status(404).json({ error: `Film with id '${id}' was not found` });
            return;
        }

        const updateFilm = {
            id: films[foundFilmIndex].id,
            ...filmData,
        };

        films.splice(foundFilmIndex, 1, updateFilm);

        res.status(200).json(updateFilm);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Server error';
        res.status(400).json({ error: message });
    }
};

export default replaceFilm;
