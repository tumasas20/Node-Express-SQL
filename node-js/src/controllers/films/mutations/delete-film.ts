import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import { FilmViewModel } from 'controllers/films/types';
import FilmModel from 'controllers/films/films-model';

const deleteFilm: RequestHandler<
    { id?: string },
    FilmViewModel | ErrorResponse,
    {},
    {}
> = async (req, res) => {
    const { id } = req.params;

    try {
    if (id === undefined) throw new ServerSetupError();
    const filmViewModel = await FilmModel.getFilm(id);
    await FilmModel.deleteFilm(id);

    res.status(200).json(filmViewModel);
    } catch (err) {
    handleRequestError(err, res);
    }
};

export default deleteFilm;
