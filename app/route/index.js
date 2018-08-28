// index.js
var fs = require("fs")
module.exports = function(app) {
  app.use('/pics', require('./pics_route.js'));

  // 404 page
  app.use(function(req, res) {
    if (!res.headersSent) {
      res.status(404).render('404');
      res.status(413).render('413');
      //next()
    }
  });
}