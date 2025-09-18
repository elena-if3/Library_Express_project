const {
    models: { books },
} = require("../models");
const serviceCallResult = require("../responses/serviceCallResult.response");
const bookRepository = require("../repositories/book.repository");
const apiCallResultResponse = require("../responses/apiCallResult.response");

const findAll = async () => {
    const books = await bookRepository.findAll();
    return serviceCallResult.ok(books);
};

const findOneById = async (id) => {
    const book = await bookRepository.findById(id);
    if (!book)
        return serviceCallResult.notFound(`Book with id #${id} not found.`);
    return serviceCallResult.ok(book);
};

const create = async (book = {}) => {
    const { title, author_id } = book;
    let error = "";

    if (title && author_id) {
        await bookRepository.create(book);
        return serviceCallResult.created();
    } else if (!title && !author_id) {
        error = "A book must have a title and an author('s id)!";
    } else if (!title) {
        error = "A book must have a title!";
    } else if (!author_id) {
        error = "A book must have an author('s id)!";
    }
    return serviceCallResult.badRequest(error);
};

const update = async (id, newBook = {}) => {
    const book = await bookRepository.findById(id);
    if (!book) return serviceCallResult.notFound(`Book with id #${id} not found.`);
    await bookRepository.update(book, newBook);
    return serviceCallResult.noContent();
}

const remove = async (id) => {
    const book = await bookRepository.findById(id);
    if (!book) return serviceCallResult.notFound(`Book with id #${id} not found.`);
    await bookRepository.remove(book);
    return serviceCallResult.noContent();
}

module.exports = {
    findAll,
    findOneById,
    create,
    update,
    remove
};
