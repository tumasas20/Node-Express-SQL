import { FilmViewModel } from 'films/types';
import mysql from 'mysql2/promise';
import config from 'config';
import FilmNotFoundError from 'films/film-not-found-error';
import SQL from './sql';

const getFilms = async (): Promise<FilmViewModel[]> => {
    const connection = await mysql.createConnection(config.database);

    const sql = `
    ${SQL.SELECT}
    ${SQL.GROUP}
    `;

    const [films] = await connection.query(sql);

    connection.end();

    return films as FilmViewModel[];
};

const getFilm = async (id: string): Promise<FilmViewModel> => {
    const connection = await mysql.createConnection(config.database);

    const prepareSql = `
    ${SQL.SELECT}
    where f.filmId = ?
    ${SQL.GROUP}`;
    const bindings = [id];

    const [films] = await connection.query<mysql.RowDataPacket[]>(prepareSql, bindings);
    connection.end();

    if (films.length === 0) throw new FilmNotFoundError(id);

    return films[0] as FilmViewModel;
};

const deleteFilm = async (id: string): Promise<void> => {
    const connection = await mysql.createConnection(config.database);
    const prepareSql = `
    DELETE from user_film_rating
    WHERE filmId = ?;

    DELETE from role
    WHERE filmId = ? and actorId = ?;
    
    DELETE from actor
    WHERE actorId = ?;

    SET @filmImagesIds = (
      select group_concat(imageId) 
      from film_image 
      where filmId = ?
      group by filmId);  

    DELETE from film_image
    WHERE filmId = ?;

    DELETE from image
    WHERE find_in_set(imageId, @filmImagesIds);

    DELETE from film
    WHERE filmId = ?;`;

    const bindings = [id, id, id, id, id, id, id];
    await connection.query(prepareSql, bindings);
};

const FilmModel = {
    getFilms,
    getFilm,
    deleteFilm,
  };

  export default FilmModel;
