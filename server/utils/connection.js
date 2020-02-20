const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'THE HOST',
    port: 3306,
    user: 'THE USER',
    password: 'THE PASSWORD',
    database: 'THE DATABASE'
});

module.exports = connection;