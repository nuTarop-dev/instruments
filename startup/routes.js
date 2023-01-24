const express = require("express");
const { auth, animals } = require("../routes");

module.exports = function (app) {
    app.use(express.json());
    app.use("/animals", animals);
    app.use("/auth", auth);
}