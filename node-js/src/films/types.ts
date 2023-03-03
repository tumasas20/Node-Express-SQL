export type FilmModel = {
  id: number,
  title: string,
  year: string,
  actor: {
    role: string,
    fullname: string
  },
  images: string[],
  rating: number,
  trailer: string
};

export type FilmsData = Omit<FilmModel, 'id'>;

export type PartialFilmData = Partial<FilmsData>;

export type FilmDataBody = PartialRecursive<FilmsData>;
