const express = require("express");
const router = require("./routes");
const config = require("./config");
const app = express();
const PORT = config.port;

app.use(router);

app.listen(PORT, () => {
    console.log("코딩 서버 오픈!!");
});
