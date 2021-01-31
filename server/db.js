require('dotenv').config();

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.user,
  password: process.env.password,
  host: process.env.host,
  port: process.env.port,
  database: process.env.database
});

module.exports = pool;

/*

const pool = new Pool({
  user: "postgres",
  password: "123",
  host: "localhost",
  port: 5432,
  database: "authtodolist"
});

*/
