const createActorMap = (actorFullnames) => actorFullnames.reduce((prevMap, actorFullname, i) => ({
    ...prevMap,
    [actorFullname]: i + 1,
  }), {});

  module.exports = createActorMap;
