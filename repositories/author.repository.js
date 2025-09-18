const {
    models: { authors },
} = require("../models");
const { Op } = require("sequelize");

findAll = () => {
    return authors.findAll();
};

findFiltered = (filters) => {
    const where = {};

    if (filters.firstname) {
        where.firstname = filters.firstname;
    }
    if (filters.lastname) {
        where.lastname = filters.lastname;
    }
    if (filters.minBirthYear || filters.maxBirthYear) {
        where.birthdate = {};
        if (filters.minBirthYear) {
            where.birthdate[Op.gte] = new Date(filters.minBirthYear, 0, 1);
        }
        if (filters.maxBirthYear) {
            where.birthdate[Op.lte] = new Date(filters.maxBirthYear, 11, 31);
        }
    }
    return authors.findAll({
        where
    });
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
    findFiltered,
    findById,
    create,
    update,
    remove
};
