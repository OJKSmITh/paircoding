class BoardRepo {
    constructor({ mysql }) {
        this.mysql = mysql;
        // console.log(mysql);
    }

    async findAll() {
        try {
            const [list] = await this.mysql.query(`select*from board`);
            return list;
        } catch (e) {
            throw new Error(e);
        }
    }

    async insert() {
        try {
            const result = await this.mysql.query(`insert into board(userid, subject, content, tagContent) value("","","","")`);
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = BoardRepo;
