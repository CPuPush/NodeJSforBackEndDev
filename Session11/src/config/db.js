const Pool = require("pg").Pool;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database:'session_11',
  password: 'poisedon4',
  port: 5432
});

module.exports = pool;