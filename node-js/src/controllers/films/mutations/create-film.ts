import ServerSetupError from 'errors/server-setup-error';
import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import FilmModel from 'controllers/films/films-model';
import { FilmViewModel, FilmDataBody } from 'controllers/films/types';
import filmDataValidationSchema from 'controllers/films/validation-schemas/film-data-validation-schema';

const createFilm: RequestHandler<
    {},
    FilmViewModel | ErrorResponse,
    FilmDataBody,
    {}
> = async (req, res) => {
    try {
        if (req.authUser === undefined) throw new ServerSetupError();
        const filmData = filmDataValidationSchema.validateSync(req.body, { abortEarly: false });

        const filmViewModel = await FilmModel.createFilm(filmData, req.authUser.id);

        res.status(201).json(filmViewModel);
      } catch (err) {
        handleRequestError(err, res);
      }
};

export default createFilm;
