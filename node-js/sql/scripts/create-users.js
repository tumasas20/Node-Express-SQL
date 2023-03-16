const createUsers = (hosts) => {
    const hostsInsertRows = hosts
      .map(({
        name,
        surname,
        email,
      }, i) => `('${name}', '${surname}', '${email}', '$2b$10$46dsQqpZminOLcO99TwhVOtsvx6B/xmDMXw1qMyJiCKyDEvVcSUp6', ${i + 2}, 'USER')`)
      .join(',\n');

    return `insert into user(name, surname, email, password, imageId, importance) values
('Mandarinas', 'Plepys', 'admin@gmail.com', '$2b$10$LnkmOUAVubtkV1aCJ77lzeFUyxKPdp7C1BMMQN3H5B2eEE3BRKv5y', 1, 'ADMIN'),
${hostsInsertRows};`;};

  module.exports = createUsers;
 