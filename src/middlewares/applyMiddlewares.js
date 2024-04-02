const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const applyMiddleWares = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: [
        "http://localhost:5173",
        "https://heliverse-users-client.vercel.app",
      ],
      credentials: true,
    })
  );
  app.use(cookieParser());
};
module.exports = applyMiddleWares;
