import { RequestHandler } from 'express';
import handleRequestError from 'helpers/handle-request-error';
import { FilmViewModel, FilmDataBody } from 'films/types';
import filmDataValidationSchema from 'films/validation-schemas/film-data-validation-schema';
import FilmModel from 'films/films-model';

const createFilm: RequestHandler<
    {},
    FilmViewModel | ErrorResponse,
    FilmDataBody,
    {}
> = async (req, res) => {
    try {
        const filmData = filmDataValidationSchema.validateSync(req.body, { abortEarly: false });
        const filmViewModel = await FilmModel.createFilm(filmData);

        res.status(201).json(filmViewModel);
      } catch (err) {
        handleRequestError(err, res);
      }
};

export default createFilm;
