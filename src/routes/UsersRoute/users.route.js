const express = require("express");
const getAllUsers = require("../../controllers/users/getAllusers.controller");
const getCountUsers = require("../../controllers/users/getCountusers.controller");

const router = express.Router();

router.get("/api/all-users", getAllUsers);
router.get("/api/count-users", getCountUsers);

module.exports = router;
