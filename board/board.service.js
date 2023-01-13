class BoardService {
    constructor({ BoardRepo, config }) {
        this.BoardRepo = BoardRepo;
        this.config = config;
    }

    async getList() {
        try {
            const list = await this.BoardRepo.findAll();
            console.log(list); // 서버에 잘 저장됐나 확인
            return list;
        } catch (e) {
            throw new Error(e);
        }
    }
}

module.exports = BoardService;
