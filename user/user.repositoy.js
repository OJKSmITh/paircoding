class UserRepository {
    constructor({ mysql }) {
        this.mysql = mysql
    }

    async createUser(content) {
        try {
            const { userid, userpw, username, gender } = content
            const [list] = await this.mysql.query(`insert into user(userid,userpw,username,gender) VALUES("${userid}","${userpw}","${username}","${gender}")`)
            return list
        } catch (e) {
            throw new Error(e)
        }
    }
}

module.exports = UserRepository