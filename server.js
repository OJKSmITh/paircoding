const express = require("express");
const router = require("./routes");
const config = require("./config");
const app = express();
const PORT = process.env.PORT;

app.use(express.json())

app.use(router);

app.listen(PORT, () => {
    console.log(`코딩 서버 오픈!! ${PORT}`);
});
