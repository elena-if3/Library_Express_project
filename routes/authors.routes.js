const { Router } = require("express");
const authorController = require("../controllers/author.controller");

const router = Router();

router.param("id", (req, res, next, value) => {
    if (!/^[0-9]+$/.test(value))
        return res.status(400).json({ error: "param id must be numeric!" });
    next();
});

router.get("/", authorController.findAll);
router.get("/:id", authorController.findOne);
router.post("/", authorController.create);

module.exports = router;
