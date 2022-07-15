"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");
// const database = require("./ind");


router.post('/search', ctrl.vid);
router.post('/snippets', ctrl.snip);
// router.post('/db',database.db);



module.exports = router;