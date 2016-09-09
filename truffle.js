module.exports = {
  build: {
    "index.html": "index.html",
    "app.js": [
      "javascripts/app.js"
    ],
    //  "jquery-3.1.0.min.js": [
    //   "javascripts/jquery-3.1.0.min.js"
    // ],
    // "bootstrap.min.js": [
    //   "javascripts/bootstrap.min.js"
    // ],
      "ionic.bundle.js": [
      "javascripts/ionic.bundle.js"
    ],
    
    "app.css": [
      "stylesheets/app.css"
    ],
     "ionic.app.css" : [
      "stylesheets/ionic.app.css"
    ],
    // "ionicons.ttf" : [
    //   "stylesheets/ionicons.ttf"
    //   ],
    // "ionicons.woff" : [
    //   "stylesheets/ionicons.woff"
    //   ],
    // "bootstrap.min.css" : [
    //   "stylesheets/bootstrap.min.css"
    // ],
    // "bootstrap-theme.min.css" : [
    //   "stylesheets/bootstrap-theme.min.css"
    //   ],
    "images/": "images/",
    "stylesheets/": "stylesheets/"
  },
  rpc: {
    host: "localhost",
    port: 8545
  }
};
