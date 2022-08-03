const { Instrument } = require("../models");

module.exports = {
    getAllInstruments: () => {
        return Instrument.findAll();
    },
    getInstrumentBySymbol: (symbol) => {
        return Instrument.findOne({where: { symbol }})
    }
}