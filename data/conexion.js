const { Pool } = require('pg');

const conexion = () => {
    return new Pool({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: 'root',
        database: 'deportes'
    });
}

module.exports = conexion;