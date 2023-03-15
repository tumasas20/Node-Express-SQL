import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import FilmNotFoundError from 'films/film-not-found-error';
import { FilmDataBody, FilmViewModel } from 'films/types';
import partialFilmDataValidationSchema from 'films/validation-schemas/partial-film-data-validation-schema';

const patchFilm: RequestHandler<
{ id?: string },
FilmViewModel | ErrorResponse,
FilmDataBody,
{}
> = (req, res) => {
    const { id } = req.params;

try {
    if (id === undefined) throw new ServerSetupError();
    const filmData = partialFilmDataValidationSchema.validateSync(req.body);
    const foundFilm = films.find((film) => String(film.id) === id);

    if (foundFilm === undefined) throw new FilmNotFoundError(id);

    Object.assign(foundFilm, filmData);

    res.status(200).json(foundFilm);
} catch (err) {
        handleRequestError(err, res);
    }
};

export default patchFilm;
