const express = require("express");
const router = express.Router();
const board = require("../board/board.router");

router.use("/board", board); // view page

module.exports = router;
