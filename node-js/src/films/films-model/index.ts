import { FilmViewModel } from 'films/types';
import mysql from 'mysql2/promise';
import config from 'config';
import FilmNotFoundError from 'films/film-not-found-error';
import SQL from './sql';
import { FilmData } from '../types';

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

const createFilm = async (filmData: FilmData): Promise<FilmViewModel> => {
    const connection = await mysql.createConnection(config.database);

    const prepareSql = `
    insert into film (title, year, played, trailer, userId) values
(?, ?, ?, ?, 1);

set @created_film_id = last_insert_id();

insert into image (src) values
${filmData.images.map(() => '(?)').join(',\n')};

set @first_image_id = last_insert_id();

insert into film_image (imageId, filmId)
select imageId, @created_film_id as filmId
from image
where imageId >= @first_image_id;

set @actor_id = last_insert_id();

insert into actor (fullname, actorId) values
(?, @actor_id);

insert into role (actorId, filmId) values
(@actor_id, @created_film_id);

${SQL.SELECT}
where f.filmId = @created_film_id
${SQL.GROUP};
    `;

    const bindings = [
        filmData.title,
        filmData.year,
        filmData.actor.role,
        filmData.trailer,
        ...filmData.images,
        filmData.actor.fullname,
    ];

    const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(prepareSql, bindings);
    const [film] = queryResult[queryResult.length - 1] as FilmViewModel[];

    connection.end();
    return film;
};

const replaceFilm = async (filmId: string, filmData: FilmData): Promise<FilmViewModel> => {
    const connection = await mysql.createConnection(config.database);

    const prepareSql = `
update film
set title = ?, year = ?, played = ?, trailer = ?
where filmId = ?;

set @filmImagesIds = (
  select group_concat(imageId) 
    from film_image 
    where filmId = ?
    group by filmId);

delete from film_image
where filmId = ?;

delete from image
where find_in_set(imageId, @filmImagesIds);

set @filmRoleIds = (
  select group_concat(actorId) 
    from role 
    where filmId = ?
    group by filmId);

delete from role
where filmId = ?;

delete from actor
where find_in_set(actorId, @filmRoleIds);

insert into image (src) values
${filmData.images.map(() => '(?)').join(',\n')};

set @first_image_id = last_insert_id();

insert into film_image(imageId, filmId)
select imageId, ? as filmId
from image
where imageId >= @first_image_id;

set @actor_id = ?;

insert into actor (fullname, actorId) values
(?, @actor_id);

insert into role (actorId, filmId) values
(@actor_id, ?);

${SQL.SELECT}
where f.filmId = ?
${SQL.GROUP};
`;

    const bindings = [
        filmData.title,
        filmData.year,
        filmData.actor.role,
        filmData.trailer,
        filmId,
        filmId,
        filmId,
        filmId,
        filmId,
        ...filmData.images,
        filmId,
        filmId,
        filmData.actor.fullname,
        filmId,
        filmId,
    ];

    const [queryResult] = await connection.query<mysql.RowDataPacket[][]>(prepareSql, bindings);
    const [film] = queryResult[queryResult.length - 1] as FilmViewModel[];

    connection.end();

    return film;
};

const FilmModel = {
    getFilms,
    getFilm,
    deleteFilm,
    createFilm,
    replaceFilm,
};

export default FilmModel;
