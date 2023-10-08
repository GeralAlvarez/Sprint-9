const knex = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "1996",
    database: "Sprint8",
  },
});

module.exports = knex;
