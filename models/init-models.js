var DataTypes = require("sequelize").DataTypes;
var _author = require("./author");
var _book = require("./book");

function initModels(sequelize) {
    var authors = _author(sequelize, DataTypes);
    var books = _book(sequelize, DataTypes);

    books.belongsTo(authors, { as: "author", foreignKey: "author_id" });
    authors.hasMany(books, { as: "books", foreignKey: "author_id" });

    return {
        authors,
        books,
    };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
