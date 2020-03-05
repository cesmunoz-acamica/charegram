const UserService = require('../services/userService');
const service = new UserService()

class Controller {

  constructor() { }

  async getUsers(req, res) {
    const result = await service.getUserList();
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
