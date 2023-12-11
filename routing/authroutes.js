const express = require("express");
const path = require("path");
const router = express.Router();
router.get("/dashboard", (req, res) => {
  res.render("dashboard", {
    name: req.session.name,
    username: req.session.username,
  });
});
router.get("/profile", (req, res) => {
  res.send("Profile Page");
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.get("/changepassword", (req, res) => {
  res.render("changepassword", { msg: "" });
});

module.exports = router;
