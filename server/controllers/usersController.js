const db = require('../utils/db');

// FUNCTION
async function getUserList() {
  return await db.query('SELECT * FROM users');
}

// CLASE
function Controller() {
  this.getUsers = async (req, res) => {
    const result = await getUserList();
    return res.status(200).json(result);
  }

  this.saveUser = (req, res) => {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  this.getById = (req, res) => {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  this.deleteById = (req, res) => {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  this.updateUser = (req, res) => {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }
}

module.exports = Controller;
