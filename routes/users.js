const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/Users");

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/registered", (req, res) => {
  res.render("registered", { user: new Users() });
});
router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
