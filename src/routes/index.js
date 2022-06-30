const express = require('express');
const { loginController, logsGenerator} = require("../controllers");

const router = express.Router();

router.post("/login.fcgi", loginController);
router.post("/load_objects.fcgi", logsGenerator)

module.exports = router;