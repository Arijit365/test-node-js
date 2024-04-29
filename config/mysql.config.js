const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();
// connect with mysql xampp
const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD,
    connectionLimit:process.env.DB_CONNECTION_LIMIT
});

module.exports =  pool;
