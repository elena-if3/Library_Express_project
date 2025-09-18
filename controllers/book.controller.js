const bookService = require("../services/book.service");
const apiCallResult = require("../responses/apiCallResult.response");

const findAll = async (req, res) => {
    const result = await bookService.findAll(req.query);
    return apiCallResult(res, result);
};

const findOne = async (req, res) => {
    const result = await bookService.findOneById(req.params.id);
    return apiCallResult(res, result);
};

const create = async (req, res) => {
    const result = await bookService.create(req.body);
    return apiCallResult(res, result);
};

const update = async (req, res) => {
    const result = await bookService.update(req.params.id, req.body);
    return apiCallResult(res, result);
}

module.exports = {
    findAll,
    findOne,
    create,
    update,
};
