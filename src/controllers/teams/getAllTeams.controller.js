const Teams = require("../../models/teams/team.model");

const getAllTeams = async (req, res) => {
  try {
    const result = await Teams.find();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = getAllTeams;
