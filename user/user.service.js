class UserService {
    constructor({ userRepository }) {
        this.userRepository = userRepository
    }

    async list(content) {
        try {
            const list = await this.userRepository.createUser(content)
            return list
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserService