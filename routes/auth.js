const express = require("express");
const router = express.Router();
const { UsersController } = require("../controllers");

const generateToken = (user) => {
  //TODO
  return "ok";
}

router.post("/register", async (req, res) => {
  UsersController.register(req.body.email, req.body.password)
    .then((user) => {
      res.send(generateToken(user));
    }).catch(error => {
      res.status(400).send(error);
    });
});

router.post("/login", async (req, res) => {
  UsersController.authenticate(req.body.email, req.body.password)
    .then((user) => {
      res.send(generateToken(user));
    }).catch(error => {
      res.status(400).send(error);
    });
});

module.exports = router;
