import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import ServerSetupError from 'errors/server-setup-error';
import FilmNotFoundError from 'films/film-not-found-error';
import { films } from 'films/data';
import { FilmModel } from 'films/types';

const getFilm: RequestHandler<
{ id?: string },
FilmModel | ErrorResponse,
undefined,
{}
> = (req, res) => {
    const { id } = req.params;
    try {
        if (id === undefined) throw new ServerSetupError();
        const foundFilm = films.find((film) => String(film.id) === id);
        if (foundFilm === undefined) throw new FilmNotFoundError(id);

        res.status(200).json(foundFilm);
    } catch (err) {
        handleRequestError(err, res);
    }
};

export default getFilm;
