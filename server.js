const express = require("express")
const config = require("./config")
const app = express()

app.listen(PORT, () => {
    console.log('코딩 서버 오픈!!')
})