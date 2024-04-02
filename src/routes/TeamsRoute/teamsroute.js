const express = require("express");
const postTeam = require("../../controllers/teams/postTeams.controller");
const getAllTeams = require("../../controllers/teams/getAllTeams.controller");
const deleteTeam = require("../../controllers/teams/deleteTeam.controller");
const getTeamUsers = require("../../controllers/teams/getTeamUsers.controller");

const router = express.Router();

router.post("/api/add-team", postTeam);
router.get("/api/all-teams", getAllTeams);
router.delete("/api/delete-team/:id", deleteTeam);
router.get("/api/get-team-users", getTeamUsers);

module.exports = router;
