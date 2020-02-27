const db = require('../utils/db');

// FUNCTION
function getUserList() {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM users', (error, result) => {
      if (error) {
        reject(error);
      }

      resolve(result);
    });
  });
}

// CLASE
function Controller() {
  this.getUsers = (req, res) => {
    getUserList()
      .then((data) => res.status(200).json(data))
      .catch((error) => res.status(500).send(error))
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
