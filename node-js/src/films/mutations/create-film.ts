import { RequestHandler } from 'express';
import createId from 'helpers/create-id';
import handleRequestError from 'helpers/handle-request-error';
import { FilmModel, FilmDataBody } from 'films/types';
import filmDataValidationSchema from 'films/validation-schemas/film-data-validation-schema';

const createFilm: RequestHandler<
    {},
    FilmModel | ErrorResponse,
    FilmDataBody,
    {}
> = (req, res) => {
    try {
        const filmData = filmDataValidationSchema.validateSync(req.body, { abortEarly: false });
        const createdFilm = { id: createId(), ...filmData };
        films.push(createdFilm);

        res.status(201).json(createdFilm);
      } catch (err) {
        handleRequestError(err, res);
      }
};

export default createFilm;
