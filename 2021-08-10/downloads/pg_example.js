const {Pool} = require('pg');
const connectionInfo = `postgres://postgres:super@localhost:5432/test0`;
const pool = new Pool({connectionString: connectionInfo});

pool.query(
    `SELECT userid, name FROM payroll
    LIMIT 5;`,
    [],
    function (err, result) {
        if (err) {
            console.log(err);
            process.exit(1);
        }
        console.log(result.rows);
        process.exit(0);
    }
)
