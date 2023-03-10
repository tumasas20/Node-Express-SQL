const createUsers = (hosts) => {
    const hostsInsertRows = hosts
      .map(({
        name,
        surname,
        email,
      }, i) => `('${name}', '${surname}', '${email}', 'laikinas', ${i + 2}, 'USER')`)
      .join(',\n');

    return `insert into user(name, surname, email, password, imageId, importance) values
('Mandarinas', 'Plepys', 'admin@gmail.com', 'Druskinikai135!', 1, 'ADMIN'),
${hostsInsertRows};`;};

  module.exports = createUsers;
