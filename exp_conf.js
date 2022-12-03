module.exports.exp_conf = {
  "app_cfg": {
    "dotfiles": "ignore",
    "etag": false,
    "extensions": [
      "html", "css",
      "js",
      "jpg", "png"
    ],
    "index": false,
    "maxAge": "1d",
    "redirect": false,
    "setHeaders": function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
};