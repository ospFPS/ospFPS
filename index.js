(async function () { try {
	"use strict";

	/* Importing librarys */
	console.time("server_startup");
	console.log("\u001b[0;36mStarting up server...")
	console.log("Loading librarys...");
	const MongoDB = require("mongodb");
	const Express = require("express");
	/* Application */
	console.log("Loading Environment Variables...");
	const _env_ = require("./env.js");

	console.log("Connecting to MongoDB Database...");
	const db = await MongoDB.MongoClient.connect(
		_env_.mongo_db.client_url,
		_env_.mongo_db.options
	);

	console.log("Initializeing Express.js app instance...");
	const App = Express();

	console.timeEnd("server_startup");
	console.log("\u001b[0;33mI'm ready! :D\u001b[0;0m");
	console.log(`Running on: http://${_env_.app_cfg.ip_addr}:${_env_.app_cfg.port}`);

	App.use(Express.static (
		_env_.app_cfg.public_folder,
		_env_.app_cfg.options
	));
	App.use(Express.json());
	App.use(Express.urlencoded({ extended: true }));
	App.post("/api/data_form", function (req, res) {
		console.log(`Data recieved: ${req.body.data}`);
		// Process data
		if (!isNaN(req.body.data))
		{
			res.json({
				"processed_data": parseInt(req.body.data) * 2
			});
		}
		else
		{
			console.error("Invalid data type!");
			res.status(422)
			.json({
				"error": "422 (Unprocessable Entity)",
				"status": 422
			});
		}
	});

	App.listen(_env_.app_cfg.port, _env_.app_cfg.ip_addr);

} catch(e) {
	console.error(`\u001b[0;31m!!! Fatal internal sever error !!!\u001b[0;33m\n${e}\u001b[0;0m`);
} })();