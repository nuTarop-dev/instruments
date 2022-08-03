const express = require("express");
const { instruments } = require("../routes")

module.exports = function (app) {
    app.use(express.json());
    app.use("/instruments", instruments);
}