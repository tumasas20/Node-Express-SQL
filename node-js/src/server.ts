import express from 'express';
import morgan from 'morgan';
import config from 'config';
import cors from 'cors';
import filmsController from 'films';
import DatabaseService from 'services/database-services';

const server = express();
server.use(cors());
server.use(express.json());
server.use(morgan('tiny'));
server.use(express.static('public'));
server.use('/api/films', filmsController);

DatabaseService.connect(() => {
  server.listen(config.server.port, () => {
    console.log(`Server is running on ${config.server.address}
    `);
  });
});
