const fs = require('fs');
const oldData = require('../old-data/db.json');
const createUsersImages = require('./create-users-images');
const createHosts = require('./create-hosts');
const createUsers = require('./create-users');
const createFilms = require('./create-films');
const createUsersEmailIdMap = require('./create-users-email-id-map');
const createActorFullnames = require('./create-actor-fullnames');
const createActorMap = require('./create-actor-map');
const createActors = require('./create-actors');
const createFilmsImages = require('./create-films-images');
const createFilmsRoles = require('./create-role');

const { films } = oldData;
const hosts = createHosts(films);
const usersEmailIdMap = createUsersEmailIdMap(hosts);
const actorFullnames = createActorFullnames(films);
const actorMap = createActorMap(actorFullnames);
const startWithId = hosts.length + 2;

const userImagesSql = createUsersImages(hosts);
const usersSql = createUsers(hosts);
const filmsSql = createFilms(films, usersEmailIdMap);
const actorsSql = createActors(actorFullnames);
const filmsRolesSql = createFilmsRoles(films, actorMap);
const filmsImagesSql = createFilmsImages(films, startWithId);

const dataInsertionMigration = [
    userImagesSql,
    usersSql,
    filmsSql,
    actorsSql,
    filmsRolesSql,
    filmsImagesSql,
].join('\n\n');

const date = new Date();
const dateStr = date.toLocaleString('lt-LT', {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
  hour: '2-digit',
  minute: '2-digit',
})
  .replaceAll(':', '-')
  .replaceAll(' ', '-');
fs.writeFile(
  `sql/migrations/migration-${dateStr}-data-insertion.sql`,
  dataInsertionMigration,

(err) => err && console.log(err),
);
