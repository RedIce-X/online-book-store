mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'book-store',
    password: 'process.env.DBPASSWORD'
});