export type FilmViewModel = {
  id: number,
  title: string,
  year: string,
  host: {
    id: number,
    name: string,
    email: string,
    surname: string
  },
  actor: {
    role: string,
    fullname: string
  },
  images: string[],
  rating?: number,
  trailer: string
};

export type FilmsData = Omit<FilmViewModel, 'id' | 'host' | 'rating'>;

export type PartialFilmData = Partial<FilmsData>;

export type FilmDataBody = PartialRecursive<FilmsData>;
