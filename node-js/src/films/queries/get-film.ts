import { RequestHandler } from 'express';
import mysql from 'mysql2/promise';
import { FilmModel } from 'films/types';
import config from 'config';
import ServerSetupError from 'errors/server-setup-error';
import handleRequestError from 'helpers/handle-request-error';
import SQL from 'films/sql';
import FilmNotFoundError from 'films/film-not-found-error';

const getFilm: RequestHandler<
{ id?: string },
FilmModel | ErrorResponse,
undefined,
{}
> = async (req, res) => {
    const { id } = req.params;
    try {
        if (id === undefined) throw new ServerSetupError();
        const connection = await mysql.createConnection(config.database);

        const sql = `
        ${SQL.SELECT}
        where f.filmId = ${id}
        ${SQL.GROUP}`;

        const [films] = await connection.query<mysql.RowDataPacket[]>(sql);

        if (films.length === 0) throw new FilmNotFoundError(id);

        connection.end();

        res.json(films[0] as FilmModel);
    } catch (err) {
        handleRequestError(err, res);
    }
};

export default getFilm;
