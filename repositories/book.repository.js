const {
    models: { books, authors },
} = require("../models");
const { Op } = require("sequelize");

findAll = () => {
    return books.findAll({
        include: [
            {
                model: authors,
                as: "author",
            }
        ]
    });
};

findFiltered = (filters) => {
    const authorInclude = { model: authors, as: "author"};
    const where = {};
    if (filters.title) {
        where.title = { [Op.iLike]: `%${filters.title}%`};
    }
    if (filters.minReleaseYear || filters.maxReleaseYear) {
        where.release_year = {};
        if (filters.minReleaseYear) {
            where.release_year[Op.gte] = filters.minReleaseYear;
        }
        if (filters.maxReleaseYear) {
            where.release_year[Op.lte] = filters.maxReleaseYear;
        }
    }
    if (filters.author) {
        authorInclude.where = {};
        authorInclude.where[Op.or] = {};
        authorInclude.where[Op.or].firstname = {
            [Op.iLike]: `%${filters.author}%`,
        };
        authorInclude.where[Op.or].lastname = {
            [Op.iLike]: `%${filters.author}%`,
        };
    } else if (filters.author_id) {
        authorInclude.where = {};
        authorInclude.where.id = filters.author_id;
    }

    return books.findAll({
        where,
        include: [authorInclude]
    });
}

findById = (id) => {
    return books.findByPk(id);
};

create = (book) => {
    return books.create(book);
};

update = (currentBook, book) => {
    currentBook.title = book.title ?? currentBook.title;
    currentBook.description = book.description ?? currentBook.description;
    currentBook.release_year = book.release_year ?? currentBook.release_year;
    currentBook.author_id = book.author_id ?? currentBook.author_id;

    return currentBook.save();
}

remove = (book) => {
    return book.destroy();
}

module.exports = {
    findAll,
    findFiltered,
    findById,
    create,
    update,
    remove
};
