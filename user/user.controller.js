class UserController {
    constructor({ userService }) {
        this.userService = userService
    }

    async postUser(req, res, next) {
        try {
            const content = req.body
            const users = await this.userService.list(content)
            console.log(users)
            res.json(users)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = UserController