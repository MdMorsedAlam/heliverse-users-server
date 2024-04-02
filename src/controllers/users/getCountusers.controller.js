const Users = require("../../models/users/user.model");

const getCountUsers = async (req, res) => {
  const count = await Users.estimatedDocumentCount();

  res.send({ count });
};

module.exports = getCountUsers;
