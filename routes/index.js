"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
// const database = require("./ind");


router.post('/search', ctrl.vid);
router.post('/snippets', ctrl.snip);
router.post('/getDb', ctrl.getDb);



module.exports = router;