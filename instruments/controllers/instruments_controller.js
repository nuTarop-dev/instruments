const { Instrument } = require("../models");

const getInstrumentBySymbol = (symbol) => {
	return Instrument.findOne({ where: { symbol } });
};

module.exports = {
	getAllInstruments: () => {
		return Instrument.findAll();
	},
	getInstrumentBySymbol,
	createOrUpdate: (symbol, name, usd_price) => {
		return getInstrumentBySymbol(symbol).then((instrument) => {
			if (instrument) {
				instrument.update({ name, usd_price, updatedAt: Date.now() });
			} else {
				Instrument.create({ symbol, name, usd_price });
			}
		});
	},
};
