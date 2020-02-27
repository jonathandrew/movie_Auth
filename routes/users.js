const express = require("express");
const router = express.Router();
const passport = require("passport");
const Users = require("../models/Users");

router.get("/register", (req, res) => {
  res.render("register");
});
router.post("/register", (req, res) => {
  console.log(req.body)
  console.log("hit")
  Users.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ message: "email already in use" });
    } else {
      const newUser = new Users();
      newUser.name = req.body.name;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      newUser
        .save()
        .then(user => {
          return res.status(200).json({ message: "user added", user });
        })
        .catch(err => {
          return res.status(500).json({ message: "server error", err });
        });

      passport.authenticate("local"),
        (req, res) => {
          res.redirect("/");
        };
    }
  });
});
module.exports = router;
