const Teams = require("../../models/teams/team.model");

const postTeam = async (req, res) => {
  try {
    const teamData = req.body.teamData;
    const result = await Teams.create(teamData);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = postTeam;
