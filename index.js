const { sequilizeInit } = require("./globals");
const express = require("express");
const app = express();

require("./startup/routes")(app);

sequilizeInit().then(() => {
	console.log("DB connected.");
	console.log("Starting server...");
	const port = process.env.PORT || "8081";
	app.listen(port, () =>
		console.log(`Listening on port ${port}...`)
	);
});
