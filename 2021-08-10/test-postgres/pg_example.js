const {Pool} = require('pg');
const connectionInfo = `postgres://postgres:mypassword@localhost:5432/test1`;
const pool = new Pool({connectionString: connectionInfo});

pool.query(
    `SELECT * FROM payroll 
    WHERE userid = 2
    LIMIT 10;`,
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
