const {
    models: { books },
} = require("../models");

findAll = () => {
    return books.findAll();
};

findById = (id) => {
    return books.findByPk(id);
};

create = (book) => {
    return books.create(book);
};

module.exports = {
    findAll,
    findById,
    create,
};
