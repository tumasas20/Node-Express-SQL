import { RequestHandler } from 'express';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
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

    if (id === undefined) throw new ServerSetupError();

    try {
        const filmData = filmDataValidationSchema.validateSync(req.body);
        const filmViewModel = await FilmModel.replaceFilm(id, filmData);

        res.status(200).json(filmViewModel);
    } catch (err) {
        handleRequestError(err, res);
    }
};

export default putFilm;
