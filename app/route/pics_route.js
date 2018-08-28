// pics_route.js
const express = require('express');
const picsRouter = express.Router();

const checkLogin = require('../../middlewares/check_login.js').checkLogin;
const picsController = require('../controller/pics_controller.js')

picsRouter.post('/login', picsController.check_auth);

module.exports = picsRouter;