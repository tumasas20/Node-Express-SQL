import { RequestHandler } from 'express';
import { films } from 'films/data';
import { FilmModel, PartialFilmData } from 'films/types';
import filmDataValidationSchema from 'films/validation-schemas/film-data-validation-schema';
import { createId } from '../../helpers/create-id';

const createFilm: RequestHandler<
    {},
    FilmModel | ErrorResponse,
    PartialFilmData,
    {}
> = (req, res) => {
    try {
        const filmData = filmDataValidationSchema.validateSync(req.body);
        const createdFilm = {
          id: createId(),
          ...filmData,
        };

        films.push(createdFilm);

        res.status(201).json(createdFilm);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Server error';
        res.status(400).json({ error: message });
      }
};

export default createFilm;
