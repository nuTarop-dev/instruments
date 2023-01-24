const { sequelize, sequilizeInit } = require("./globals");

// const cron = require("node-cron");

// console.log("Running cron job every 5 secs ...");

// cron.schedule("*/5 * * * * *", () => {
	sequilizeInit().then(() => {
		console.log("DB connected.");
		sequelize.close();
	}).catch(e => console.log(e));
// });
