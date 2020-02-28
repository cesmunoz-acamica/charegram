const db = require('../utils/db');

// FUNCTION
async function getUserList() {
  return await db.query('SELECT * FROM users');
}

class Controller {
  constructor() { }

  async getUsers(req, res) {
    const result = await getUserList();
    return res.status(200).json(result);
  }

  saveUser(req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  getById(req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  deleteById(req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  updateUser(req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }
}

module.exports = Controller;
