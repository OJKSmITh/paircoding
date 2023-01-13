const e = require("express");

class BoardController {
    constructor({ BoardService }) {
        this.BoardService = BoardService;
    }

    async getList(req, res, next) {
        try {
            const list = await this.BoardService.getList();
            res.json(list);
        } catch (e) {
            throw new Error(e);
        }
    }

    async postOne(req, res, next) {
        try{}catch(){}
    }
}

module.exports = BoardController;
