const db = require('../utils/db');

class Service {
    constructor() { }

    async getUserList() {
        return await db.query('SELECT * FROM users');
    }
}

module.exports = Service;