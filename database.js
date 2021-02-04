const knex = require('knex')({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'mimi1234',
    database: 'knexjs'
  }
});

module.exports = knex;