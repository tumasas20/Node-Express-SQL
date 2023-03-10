const createUsersImages = (hosts) => {
    const imagesInsertionRows = hosts
      .map((x) => `('${x.image}')`)
      .join(',\n');

    return `insert into image(src) values
('https://images.freeimages.com/fic/images/icons/126/sleek_xp_basic/300/administrator.png'),
${imagesInsertionRows};`;};

  module.exports = createUsersImages;
