const express = require('express');
const { loginController} = require("../controllers/login/loginController");
const { activeMonitor } = require('../controllers/monitor/activeMonitor');
const { changeEndpoint } = require('../controllers/monitor/changeEndpoint');

const router = express.Router();

router.post("/login.fcgi", loginController);
router.post("/set_configuration.fcgi", activeMonitor);
router.post("/set_configuration.fcgi", changeEndpoint);

module.exports = router;