const {
    models: { authors },
} = require("../models");

findAll = () => {
    return authors.findAll();
};

findById = (id) => {
    return authors.findByPk(id);
};

create = (author) => {
    return authors.create(author);
};

module.exports = {
    findAll,
    findById,
    create,
};
