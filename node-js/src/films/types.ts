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
