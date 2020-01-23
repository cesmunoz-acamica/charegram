function getUsers(req, res) {
  const users = [
    {
      id: 1,
      username: "mgrozado",
      firstName: "Maximiliano",
      lastName: "Rozado"
    },
    {
      id: 2,
      username: "cesmunoz",
      firstName: "Cesar",
      lastName: "Muñoz"
    },
    {
      id: 3,
      username: "jsmith",
      firstName: "John",
      lastName: "Smith"
    }
  ];

  res.status(200).json(users);
}

function saveUser(req, res) {
  console.log(req.body);
  res.status(201).json({
    result: "Created"
  });
}

module.exports = {
  getUsers: getUsers,
  saveUser: saveUser
};
