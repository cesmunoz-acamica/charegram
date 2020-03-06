const db = require('../utils/db');
const User = require('../models/user');

class Service {
    constructor() { }

    async getUserList() {
        const users = [];
        const result = await db.query('SELECT * FROM users');
        result.forEach(element => users.push(new User(element)));
        return users;
    }
}

module.exports = Service;