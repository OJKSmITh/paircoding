const express = require("express")
const router = express.Router()
const { controller } = require("./user.module")


router.post('/', (req, res, next) => controller.postUser(req, res, next))

module.exports = router