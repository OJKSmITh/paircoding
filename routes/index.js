const express = require("express");
const router = express.Router();
const board = require("../board/board.router");
const userRouter = require("../user/user.route")

router.use("/board", board); // view page
router.use("/users", userRouter)

module.exports = router;
