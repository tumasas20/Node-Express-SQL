import { FilmData } from 'controllers/films/types';
import * as yup from 'yup';

const filmDataValidationSchema: yup.ObjectSchema<FilmData> = yup.object({
  title: yup.string()
    .required('title is required')
    .min(2, 'title must have at least 2 letters')
    .max(32, 'title can\'t have more than 32 letters'),

  year: yup.string()
    .required('year are required'),

  actor: yup
    .object({
        role: yup.string()
        .required('actor.role is required')
        .min(2, 'actor.role must have at least 2 letters')
        .max(32, 'actor.tole can\'t have more than 32 letters'),

        fullname: yup.string()
        .required('actor.fullname is required')
        .min(2, 'actor.fullname must have at least 2 letters')
        .max(32, 'actor.fullname can\'t have more than 32 letters'),
    })
    .required('actor is required'),

  images: yup
    .array(yup.string().required())
    .min(1, 'at least one image required')
    .required('images are required'),

  trailer: yup.string()
    .required('film trailer are required'),
}).strict(true);

export default filmDataValidationSchema;
