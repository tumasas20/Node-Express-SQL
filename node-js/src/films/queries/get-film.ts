import { RequestHandler } from 'express';
import { FilmViewModel } from 'films/types';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import FilmModel from 'films/films-model';

const getFilm: RequestHandler<
{ id?: string },
FilmViewModel | ErrorResponse,
undefined,
{}
> = async (req, res) => {
    const { id } = req.params;

    try {
        if (id === undefined) throw new ServerSetupError();
        const filmViewModel = await FilmModel.getFilm(id);

        res.json(filmViewModel);
    } catch (err) {
        handleRequestError(err, res);
    }
};

export default getFilm;
