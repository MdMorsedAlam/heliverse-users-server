const mongoose = require("mongoose");

const teamsSchema = new mongoose.Schema(
  {
    teamName: String,
    teamIds: Array,
  },
  {
    timestamps: true,
  }
);

const Teams = mongoose.model("Teams", teamsSchema);

module.exports = Teams;
