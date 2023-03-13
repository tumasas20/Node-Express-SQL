const createFilmsImages = (films, startWithId) => {
    const imagesInsertionRows = films.map(x => x.images).flat()
      .map(x => `('${x}')`)
      .join(',\n');
  
    const imagesInsertionSQL = `
  insert into image(src) values
  ${imagesInsertionRows};
  `;
  
    let imgId = startWithId;
    const filmImagesInsertionRows = films
      .reduce((filmsImages, film, i) => {
        const filmId = i + 1;
        const filmImages = film.images.map(x => ({ filmId, imageId: imgId++ }))
  
        return filmsImages.concat(filmImages);
      }, [])
      .map(({ filmId, imageId }) => `(${filmId}, ${imageId})`)
      .join(',\n');
  
    const filmImagesInsertionSQL = `
  insert into film_image(filmId, imageId) values
  ${filmImagesInsertionRows};`;
  
    return imagesInsertionSQL + filmImagesInsertionSQL;
  }
  
  module.exports = createFilmsImages;
  