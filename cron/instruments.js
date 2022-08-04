const { InstrumentsController } = require("../controllers");
const axios = require("axios");

module.exports = async function () {
    let coins = await axios.get("https://api.coingecko.com/api/v3/coins");
    console.log(typeof coins.data[0].market_data.current_price.usd);
    if (coins && coins.data && coins.data.length > 0) {
        return Promise.all(coins.data.forEach(coin => {
            return InstrumentsController.createOrUpdate(coin.symbol, coin.name, coin.market_data.current_price.usd);
        }));
    }
}