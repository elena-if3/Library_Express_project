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

update = (currentBook, book) => {
    currentBook.title = book.title ?? currentBook.title;
    currentBook.description = book.description ?? currentBook.description;
    currentBook.release_year = book.release_year ?? currentBook.release_year;
    currentBook.author_id = book.author_id ?? currentBook.author_id;

    return currentBook.save();
}

module.exports = {
    findAll,
    findById,
    create,
    update,
};
