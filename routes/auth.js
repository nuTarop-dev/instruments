const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = express.Router();
const { UsersController } = require("../controllers");
const auth = require("../middleware/auth");

const generateToken = (user) => {
  const token = jwt.sign(
    {
      user_id: user.id,
      email: user.email,
      instruments_access: user.instruments_access,
    },
    config.get("jwtPrivateKey"),
    {
      expiresIn: "1y"
    }
  );
  return token;
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

router.get("/session_verify", [auth], (req, res) => {
  res.status(200).send("Ok");
})

module.exports = router;
