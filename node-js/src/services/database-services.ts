import mysql from 'mysql2';
import config from 'config';

const connect = (callback: VoidFunction) => {
    const connetion = mysql.createConnection(config.database);

    connetion.query('SELECT 1 + 1', (err, a) => {
      if (err !== null) {
        console.error('ERROR: Connecting to database was unsuccessful');
        throw err;
      }
      console.log(a);

      callback();
      connetion.end();
    });
  };

  const DatabaseService = {
    connect,
  };

  export default DatabaseService;
