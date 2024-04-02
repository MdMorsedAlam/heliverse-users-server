const Teams = require("../../models/teams/team.model");

const getTeamUsers = async (req, res) => {
  try {
    const id = req.query.id;

    const result = await Teams.aggregate([
      {
        $match: {
          $expr: { $eq: ["$_id", { $toObjectId: id }] },
        },
      },
      {
        $unwind: "$teamIds",
      },
      {
        $lookup: {
          from: "users",
          let: { userId: { $toObjectId: "$teamIds" } },
          pipeline: [
            {
              $match: {
                $expr: { $eq: ["$_id", "$$userId"] },
              },
            },
          ],
          as: "teamUsers",
        },
      },
    ]);
    res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: true, message: "Internal Server Error" });
  }
};

module.exports = getTeamUsers;
