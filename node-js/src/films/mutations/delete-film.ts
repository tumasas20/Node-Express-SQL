import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { films } from 'films/data';
import FilmNotFoundError from 'films/film-not-found-error';
import { FilmModel } from 'films/types';

const deleteFilm: RequestHandler<
    { id?: string },
    FilmModel | ErrorResponse,
    {},
    {}
> = (req, res) => {
    const { id } = req.params;

    try {
    if (id === undefined) throw new ServerSetupError();

    const foundFilmIndex = films.findIndex((film) => String(film.id) === id);
    if (foundFilmIndex === -1) throw new FilmNotFoundError(id);

    const [foundFilm] = films.splice(foundFilmIndex, 1);

    res.status(200).json(foundFilm);
    } catch (err) {
    handleRequestError(err, res);
    }
};

export default deleteFilm;
