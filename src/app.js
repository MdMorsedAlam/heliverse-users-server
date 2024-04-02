require("dotenv").config();
const express = require("express");
const app = express();
const applyMiddleWares = require("./middlewares/applyMiddlewares");

// Routes
const allUsersRoute = require("./routes/UsersRoute/users.route");
const allTeamsRoute = require("./routes/TeamsRoute/teamsroute");

applyMiddleWares(app);

app.use(allUsersRoute); //Calling allUserRoute
app.use(allTeamsRoute); //Calling allUserRoute

app.get("/", async (req, res) => {
  res.send("Heliverse Server Is Running");
});

app.all("*", async (req, res, next) => {
  const error = new Error(`The requested url in invalid: [${req.url}]`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
  });
});

module.exports = app;
