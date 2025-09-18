const {
    models: { authors },
} = require("../models");
const {where} = require("sequelize");

findAll = () => {
    return authors.findAll();
};

findById = (id) => {
    return authors.findByPk(id);
};

create = (author) => {
    return authors.create(author);
};

update = (currentAuthor, author) => {
    currentAuthor.firstname = author.firstname ?? currentAuthor.firstname;
    currentAuthor.lastname = author.lastname ?? currentAuthor.lastname;
    currentAuthor.birthdate = author.birthdate ?? currentAuthor.birthdate;

    return currentAuthor.save();
}

remove = (author) => {
    return author.destroy();
}

module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
};
