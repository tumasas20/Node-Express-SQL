const createFilms = (films, usersEmailIdMap) => {
    const filmsInsertionRows = films
      .map(({
        host,
        title,
        year,
        actor,
        trailer,
      }) => `(${usersEmailIdMap[host.email]}, '${title}', '${year}', '${actor.role}', '${trailer}')`)
      .join(',\n');

    return `insert into film(userId, title, year, played, trailer) values
${filmsInsertionRows};`;};

  module.exports = createFilms;
