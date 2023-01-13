require("dotenv").config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const config = {
    db: {
        username,
        password,
        host,
        port,
        database,
        dialect: "mysql",
        define: {
            freezeTableName: true,
            timestamps: false,
        },
    },
};

module.exports = config;
