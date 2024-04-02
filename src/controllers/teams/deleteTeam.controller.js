const Teams = require("../../models/teams/team.model");

const deleteTeam = async (req, res) => {
  try {
    const id = req.params.id; // Assuming 'teamId' is the name of the route parameter
    const result = await Teams.findByIdAndDelete(id);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = deleteTeam;
