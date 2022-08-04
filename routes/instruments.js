const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const instrumentsAuthority = require("../middleware/instruments_authority");
const { InstrumentsController } = require("../controllers");

router.get("/", [auth, instrumentsAuthority], async (req, res) => {
  res.send(await InstrumentsController.getAllInstruments());
});

router.get("/:symbol", [auth, instrumentsAuthority], async (req, res) => {
  res.send(await InstrumentsController.getInstrumentBySymbol(req.params.symbol));
});

module.exports = router;