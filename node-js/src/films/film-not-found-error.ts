import NotFoundError from 'errors/not-found-error';

class FilmNotFoundError extends NotFoundError {
    constructor(id: string) {
        super(`Film with id '${id}' was not found`);
    }
}

export default FilmNotFoundError;
