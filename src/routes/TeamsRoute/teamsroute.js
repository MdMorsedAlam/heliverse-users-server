const express = require("express");
const postTeam = require("../../controllers/teams/postTeams.controller");
const getAllTeams = require("../../controllers/teams/getAllTeams.controller");
const deleteTeam = require("../../controllers/teams/deleteTeam.controller");

const router = express.Router();

router.post("/api/add-team", postTeam);
router.get("/api/all-teams", getAllTeams);
router.delete("/api/delete-team/:id", deleteTeam);

module.exports = router;
