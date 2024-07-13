const Pool = require("pg").Pool;
require("dotenv").config();

const pool = new Pool({
  // user: process.env.USERNAME,
  // host: process.env.HOST,
  // password: process.env.PASSWORD,
  // database: 'todoapp',
  // port: process.env.DBPORT

  user: "postgres",
  host: "localhost",
  password: "00000000",
  database: "todoapp",
  port: 5432,
});

module.exports = pool;
