const notFoundHandler = (req, res) => {
    res.status(404).json({ error: "404 - Page not found" });
};

const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).json({
        error: err.message || "500 - An unhandled error occurred",
    });
};

module.exports = {
    notFoundHandler,
    errorHandler,
};
