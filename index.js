(async function () {
    const Express = require("express");
    const exp_conf = require("./exp_conf.js");
    const App = Express();
    App.use(Express.static('public', exp_conf.app_cfg));

    App.get('/api/data_form', function (req, res) {
        res.send(`hello world! This is my first API! your query is: ${req.query.data}`);
    })

    App.listen(3000)
})();