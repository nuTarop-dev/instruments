const { sequilizeInit } = require("./globals");
const express = require("express");
const config = require('config');
const app = express();

require("./startup/routes")(app);

sequilizeInit().then(() => {
	console.log("DB connected.");
	console.log("Starting server...");
	const port = process.env.PORT || config.get("port");
	app.listen(port, () =>
		console.log(`Listening on port ${port}...`)
	);
}).catch(e => console.log(e));
