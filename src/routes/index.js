const express = require('express');
const { dao } = require('../controllers/monitor/dao');
const { event } = require('../controllers/monitor/event');
const { loginController} = require("../controllers/login/loginController");
const { activeMonitor } = require('../controllers/monitor/activeMonitor');
const { changeEndpoint } = require('../controllers/monitor/changeEndpoint');

const router = express.Router();

router.post("/login.fcgi", loginController);
router.post("/set_configuration.fcgi", activeMonitor);
router.post("/set_configuration.fcgi", changeEndpoint);

// paths monitor
router.post('/api/notifications/event', event);
router.post('/api/notifications/dao', dao);


module.exports = router;