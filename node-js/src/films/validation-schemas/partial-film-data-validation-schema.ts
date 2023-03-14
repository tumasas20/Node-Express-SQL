import { PartialFilmData } from 'films/types';
import * as yup from 'yup';

const partialFilmDataValidationSchema: yup.ObjectSchema<PartialFilmData> = yup.object({
  title: yup.string()
    .min(2, 'title must have at least 2 letters')
    .max(32, 'title can\'t have more than 32 letters'),

  year: yup.string()
    .required('year are required'),

  actor: yup
    .object({
        role: yup.string()
        .required('actor.role is required')
        .min(2, 'actor.role must have at least 2 letters')
        .max(32, 'actor.role can\'t have more than 32 letters'),

        fullname: yup.string()
        .required('actor.fullname is required')
        .min(2, 'actor.fullname must have at least 2 letters')
        .max(32, 'actor.fullname can\'t have more than 32 letters'),
    }),

  images: yup
    .array(yup.string().required()),

  trailer: yup.string(),
}).strict(true);

export default partialFilmDataValidationSchema;
