// check_login.js
'use strict';

const pics = require('../app/model/pics_model.js');

module.exports = {
  checkLogin: function checkLogin(req, res, next) {
    pics.check_auth(req.query.username).then(function(result) {
      if (result !== null ) {
        console.log("Login success!");
        next();
      } else {
        console.log(result);
        res.status(200).json({'result':'no auth'})
        return false;
      }
    }).catch(err => {
      console.log(err);
      res.status(201).json({'result':'server error'})
    })
  }
}