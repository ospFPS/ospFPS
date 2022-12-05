(async function () { try {
    /* Importing librarys */
    console.log("\033[0;36mStarting up server...")
    console.log("Loading librarys...");
    const MongoDB = require("mongodb");
    const Express = require("express");
    /* Application */
    console.log("Loading Environment Variables...");
    const exp_conf = require("./env.js");
    
    console.log("Connecting to MongoDB Database...");
    const db = await MongoDB.MongoClient.connect(
        exp_conf.mongo_db.client_url,
        exp_conf.mongo_db.options
    );
    
    console.log("Initializeing Express.js instance...");
    const App = Express();

    console.log("I'm ready!");

    App.use(Express.static (
        exp_conf.app_cfg.public_folder,
        exp_conf.app_cfg.options
    ));
    App.get('/api/data_form', function (req, res) {
        res.send(`hello world! This is my first API! your query is: ${req.query.data}`);
    });

    App.listen(3000);
} catch(e) { console.error("\033[0;31m!!! Fatal internal sever error !!!\033[0;33m\n" + e + "\033[0;0m"); } })();