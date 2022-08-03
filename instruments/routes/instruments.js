const express = require("express");
const router = express.Router();
const { InstrumentsController } = require("../controllers");

router.get("/", async (req, res) => {
  res.send(await InstrumentsController.getAllInstruments());
});

router.get("/:symbol", async (req, res) => {
  res.send(await InstrumentsController.getInstrumentBySymbol(req.params.symbol));
});

module.exports = router;