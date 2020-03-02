const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");

const Users = require("../models/Users");

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", (req, res) => {
  const newUser = new Users();
  const hashed = bcrypt.hash(req.body.password, 10);
  newUser.name = req.body.name;
  newUser.email = req.body.email;
  newUser.password = req.body.password;
  newUser
    .save()
    .then(user => {
      res.status(200).json({
        message: " user is created with nonecrypted password fudge",
        user
      });
      return res.redirect("/users/login");
    })
    .catch(err => {
      return res.status(400).json({ message: "user is created already", err });
    });
});

router.get("/login", (req, res) => {
  res.render("login");
});
module.exports = router;
