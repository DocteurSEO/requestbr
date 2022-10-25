const knex = require('knex')({
    client: 'pg',
    connection: process.env.PG,
    searchPath: ['knex', 'public'],
  });

module.exports = knex