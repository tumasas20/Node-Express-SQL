import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import ForbiddenError from 'errors/forbidden-error';
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
    if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
    const filmViewModel = await FilmModel.getFilm(id);

    if (req.authUser.importance !== 'ADMIN' && req.authUser.id !== filmViewModel.host.id) {
        throw new ForbiddenError();
    }

    await FilmModel.deleteFilm(id);

    res.status(200).json(filmViewModel);
    } catch (err) {
    handleRequestError(err, res);
    }
};

export default deleteFilm;
