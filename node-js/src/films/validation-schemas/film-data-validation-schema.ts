import { FilmsData } from 'films/types';
import * as yup from 'yup';

const filmDataValidationSchema: yup.ObjectSchema<FilmsData> = yup.object({
  title: yup.string()
    .required('title is required')
    .min(2, 'title must have at least 2 letters')
    .max(32, 'title can\'t have more than 32 letters'),

    year: yup.string()
    .required('year are required'),
    // pasitikslinti ar string ar number geriau

    actor: yup
    .object({
        role: yup.string()
        .required('location.country is required')
        .min(2, 'location.country must have at least 2 letters')
        .max(32, 'location.country can\'t have more than 32 letters'),

        fullname: yup.string()
        .required('location.city is required')
        .min(2, 'location.city must have at least 2 letters')
        .max(32, 'location.city can\'t have more than 32 letters'),
    })
    .required('location is required'),

  images: yup
    .array(yup.string().required())
    .required('images are required'),

  rating: yup.number()
    .required('rating is required')
    .positive('rating must be positive')
    .min(1, 'rating must be at least 1')
    .max(10, 'rating can\'t be more than 10'),

    trailer: yup.string()
    .required('film trailer are required'),
}).strict(true);

export default filmDataValidationSchema;
