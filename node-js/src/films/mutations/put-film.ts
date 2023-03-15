import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import FilmNotFoundError from 'films/film-not-found-error';
import { FilmViewModel, FilmDataBody } from 'films/types';
import filmDataValidationSchema from 'films/validation-schemas/film-data-validation-schema';

const putFilm: RequestHandler<
{ id?: string },
FilmViewModel | ErrorResponse,
FilmDataBody,
{}
> = (req, res) => {
    const { id } = req.params;

    if (id === undefined) throw new ServerSetupError();

    try {
        const filmData = filmDataValidationSchema.validateSync(req.body);
        const foundFilmIndex = films.findIndex((film) => String(film.id) === id);
        if (foundFilmIndex === -1) throw new FilmNotFoundError(id);

        const updateFilm = { id: films[foundFilmIndex].id, ...filmData };

        films.splice(foundFilmIndex, 1, updateFilm);

        res.status(200).json(updateFilm);
    } catch (err) {
        handleRequestError(err, res);
    }
};

export default putFilm;
