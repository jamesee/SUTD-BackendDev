const Pool = require('pg').Pool

const pool = new Pool({
//   user: 'james',
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'mypassword',
  port: 5432,
})

module.exports = { pool }