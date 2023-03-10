const createActorFullnames = (films) => [...new Set(films.map((x) => x.actor.fullname))];

module.exports = createActorFullnames;
