const {createuser} = require('../controller/user.controller');
const express = require("express");
const router = express.Router();

router.post("/createUser",createuser);

module.exports = router;