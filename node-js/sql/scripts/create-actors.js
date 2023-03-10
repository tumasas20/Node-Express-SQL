const createActors = (actorsFullnames) => {
    const insertionRows = actorsFullnames
      .map((x) => `('${x}')`)
      .join(',\n');

    return `insert into actor(fullname) values
  ${insertionRows};`;
  };

  module.exports = createActors;
