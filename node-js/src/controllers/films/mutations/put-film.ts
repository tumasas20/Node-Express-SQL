import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import ForbiddenError from 'errors/forbidden-error';
import { FilmViewModel, FilmDataBody } from 'controllers/films/types';
import filmDataValidationSchema from 'controllers/films/validation-schemas/film-data-validation-schema';
import FilmModel from 'controllers/films/films-model';

const putFilm: RequestHandler<
{ id?: string },
FilmViewModel | ErrorResponse,
FilmDataBody,
{}
> = async (req, res) => {
    const { id } = req.params;

    try {
        if (id === undefined || req.authUser === undefined) throw new ServerSetupError();
        const filmToUpdate = await FilmModel.getFilm(id);

        if (req.authUser.importance !== 'ADMIN' && req.authUser.id !== filmToUpdate.host.id) {
            throw new ForbiddenError();
        }
        const filmData = filmDataValidationSchema.validateSync(req.body);
        const filmViewModel = await FilmModel.replaceFilm(id, filmData);

        res.status(200).json(filmViewModel);
    } catch (err) {
        handleRequestError(err, res);
    }
};

export default putFilm;
