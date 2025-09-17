const authorService = require("../services/author.service");
const apiCallResult = require("../responses/apiCallResult.response");

const findAll = async (req, res) => {
    const result = await authorService.findAll(req.query);
    return apiCallResult(res, result);
};

const findOne = async (req, res) => {
    const result = await authorService.findOneById(req.params.id);
    return apiCallResult(res, result);
};

const create = async (req, res) => {
    const result = await authorService.create(req.body);
    return apiCallResult(res, result);
};

module.exports = {
    findAll,
    findOne,
    create,
};
