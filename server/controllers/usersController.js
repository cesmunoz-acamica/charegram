const db = require('../utils/connection');

function Controller() {
  this.getUsers = function (req, res) {
    db.query('SELECT * FROM users', function (error, result) {
      if (error) {
        console.log(error);
        res.status(500).send(error);
        return;
      }

      res.status(200).json(result);
    });
  }

  this.saveUser = function (req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  this.getById = function (req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  this.deleteById = function (req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }

  this.updateUser = function (req, res) {
    console.log(req.body);
    res.status(201).json({
      result: "Created"
    });
  }
}

module.exports = Controller;
