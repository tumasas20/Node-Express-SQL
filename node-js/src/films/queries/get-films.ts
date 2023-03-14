import config from 'config';
import { RequestHandler } from 'express';
import SQL from 'films/sql';
import { FilmModel } from 'films/types';
import mysql from 'mysql2/promise';

const getFilms: RequestHandler<
{},
FilmModel[],
undefined,
{}
> = async (req, res) => {
    const connection = await mysql.createConnection(config.database);

    const sql = `
    ${SQL.SELECT}
    ${SQL.GROUP}
    `;

    const [films] = await connection.query(sql);

    connection.end();

    res.json(films as FilmModel[]);
};

export default getFilms;
