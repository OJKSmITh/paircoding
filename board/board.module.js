const config = require("../config");
const mysql = require("../models");

const BoardController = require("./board.controller");
const BoardService = require("./board.service");
const BoardRepo = require("./board.repository");

const repository = new BoardRepo({ mysql });
const service = new BoardService({ BoardRepo: repository, config });
const controller = new BoardController({ BoardService: service });

module.exports = {
    repository,
    service,
    controller,
};
