// pics_controller.js
'use strict';
const pics = require('../model/pics_model.js');

module.exports = {
  check_auth: function(req, res) {
    console.log(req.body.username);
    pics.check_auth(req.body.username).then(function(result) {
      console.log(result);
      if(result) {
        console.log(result);
        console.log("controller");
        res.status(200).json({'result':'success'});
      } else {
        console.log(result);
        res.status(200).json({'result':'error'});
      }
    }).catch(err => {
      console.log(err);
      res.status(200).json({'result':'server error'});
    })
  }
}