const Pool = require('pg').Pool

const pool = new Pool({
    user: 'postgres',
    password: 'wbtjq09ck6zp',
    host: 'localhost',
    port: 5432,
    database: 'integrateapi'
})

module.exports = pool;