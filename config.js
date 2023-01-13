require("dotenv").config()

const host = process.env.DB_HOST
const port = process.env.DB_PORT
const user = process.env.DB_USER
const password = process.env.DB_PASSWORD
const database = process.env.DB_DATABASE

const config = {
    db: {
        username: "root",
        password: "95211010!",
        host: "127.0.0.1",
        port: '3306',
        database: 'sample',
        dialect: "mysql", // 어떤 dbms
        define: {// 디폴트값을 넣을 수 있음
            freezeTableName: true, //복수형태 x
            timestamps: false,
        }
    },
}

module.exports = config