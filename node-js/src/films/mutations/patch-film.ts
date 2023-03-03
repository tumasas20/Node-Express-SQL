import { RequestHandler } from 'express';
import { FilmDataBody, FilmModel } from 'films/types';
import partialFilmDataValidationSchema from 'films/validation-schemas/partial-film-data-validation-schema';
import { films } from '../data';

const patchFilm: RequestHandler<
{ id?: string },
FilmModel | ErrorResponse,
FilmDataBody,
{}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) {
        res.status(400).json({ error: 'Server setup error' });
        return;
    }

    try {
        const filmData = partialFilmDataValidationSchema.validateSync(req.body);
        const foundFilm = films.find((film) => String(film.id) === id);

        if (foundFilm === undefined) {
            res.status(404).json({ error: `Film with id '${id}' was not found` });
            return;
        }

        Object.assign(foundFilm, filmData);

        res.status(200).json(foundFilm);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Server error';
        res.status(400).json({ error: message });
    }
};

export default patchFilm;
