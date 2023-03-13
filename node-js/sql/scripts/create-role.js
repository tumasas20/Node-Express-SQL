const createFilmsRoles = (films, actorMap) => {
    const insertionRows = films
    .map(x => ({
      actorId: actorMap[x.actor.fullname],
      filmId: x.id
    }))
    .map(({ actorId, filmId }) => `(${actorId}, '${filmId}')`)
    .join(',\n');

  return `
insert into role(actorId, filmId) values
${insertionRows};`;
}
  
  module.exports = createFilmsRoles;