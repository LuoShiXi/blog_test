// pics_model.js

'use strict'

const mongolass = require('../../lib/db.js');

module.exports = {
  check_auth: function(username) {
    return mongolass._db.collection('users').find({'username':username}).toArray();
  }
}