const authorsRoutes = require("./authors.routes");
const booksRoutes = require("./books.routes");
const router = require("express").Router();

router.use("/authors", authorsRoutes);
router.use("/books", booksRoutes);

module.exports = router;
