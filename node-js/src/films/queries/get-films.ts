import { RequestHandler } from 'express';
import { films } from 'films/data';
import { FilmModel } from 'films/types';
import mysql from 'mysql2/promise';
import config from '../../config/index';

const getFilms: RequestHandler<
{},
FilmModel[],
undefined,
{}
> = async (req, res) => {
    const connection = await mysql.createConnection(config.database);

    const [queryResult] = await connection.query('SELECT * From ts14.film;');

    console.log(queryResult);

    connection.end();

    res.json(films);
};

export default getFilms;
