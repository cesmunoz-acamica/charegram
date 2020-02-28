const util = require('util');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'THEHOST',
    port: 0,
    user: 'THEUSER',
    password: 'THEPASSWORD',
    database: 'THEDATABASE'
});

connection.query = util.promisify(connection.query);

module.exports = connection;