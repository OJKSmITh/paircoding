const config = require("../config")
const mysql = require("../models")

const UserRepository = require("./user.repositoy")
const UserService = require("./user.service")
const UserController = require("./user.controller")


const repository = new UserRepository({ mysql })
const service = new UserService({ userRepository: repository })
const controller = new UserController({ userService: service })

// const content = {
//     userid: "ddd",
//     userpw: "1234",
//     username: "asd",
//     gender: "남자"
// }

// service.list(content).then((data) => {
//     console.log(data)
// })

module.exports = {
    controller
}