module.exports = {
  "app_cfg": {
    "public_folder": "Edufold",
    "options": {
      "dotfiles": "ignore",
      "etag": false,
      "extensions": [
        "html", "css",
        "js",
        "jpg", "png"
      ],
      "index": "index.html",
      "maxAge": "1d",
      "redirect": false,
      "setHeaders": function (res, path, stat) {
        res.set('x-timestamp', Date.now())
      }
    }
  },
  "mongo_db": {
    "client_url": "mongodb://127.0.0.1:27017/",
    "options": {
      //
    }
  }
};