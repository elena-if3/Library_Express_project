const {
    models: { authors },
} = require("../models");
const serviceCallResult = require("../responses/serviceCallResult.response");
const authorRepository = require("../repositories/author.repository");

const findAll = async () => {
    const authors = await authorRepository.findAll();
    return serviceCallResult.ok(authors);
};

const findOneById = async (id) => {
    const author = await authorRepository.findById(id);
    if (!author)
        return serviceCallResult.notFound(`Author with id #${id} not found.`);
    return serviceCallResult.ok(author);
};

const create = async (author = {}) => {
    const { firstname, lastname } = author;
    let error = "";

    if (firstname && lastname) {
        await authorRepository.create(author);
        return serviceCallResult.created();
    } else if (!firstname && !lastname) {
        error = "An author must have a first name and a last name!";
    } else if (!firstname) {
        error = "An author must have a first name!";
    } else if (!lastname) {
        error = "An author must have a last name!";
    }
    return serviceCallResult.badRequest(error);
};

const update = async (id, newAuthor = {}) => {
    const author = await authorRepository.findById(id);
    if (!author) return serviceCallResult.notFound(`Author with id #${id} not found.`);
    await authorRepository.update(author,newAuthor);
    return serviceCallResult.noContent();
}

const remove = async (id) => {
    const author = await authorRepository.findById(id);
    if (!author) return serviceCallResult.notFound(`Author with id #${id} not found.`);
    await authorRepository.remove(author);
    return serviceCallResult.noContent();
}

module.exports = {
    findAll,
    findOneById,
    create,
    update,
    remove
};
