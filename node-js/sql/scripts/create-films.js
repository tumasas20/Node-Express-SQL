const createFilms = (films, usersEmailIdMap) => {
    const filmsInsertionRows = films
      .map(({
        host,
        title,
        year,
      }) => `(${usersEmailIdMap[host.email]}, '${title}', '${year}')`)
      .join(',\n');

    return `insert into film(userId, title, year) values
${filmsInsertionRows};`;};

  module.exports = createFilms;
