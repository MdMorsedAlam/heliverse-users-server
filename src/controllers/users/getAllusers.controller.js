const Users = require("../../models/users/user.model");

const getAllUsers = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 20;
    const search = req.query.search || "";

    if (search !== "") {
      // Check if search query is not empty
      const result = await Users.find({
        first_name: { $regex: search, $options: "i" },
      })
        .skip(page * limit)
        .limit(limit);
      return res.send(result);
    }
    const result = await Users.find()
      .skip(page * limit)
      .limit(limit);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = getAllUsers;
