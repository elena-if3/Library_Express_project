const { Router } = require("express");
const bookController = require("../controllers/book.controller");

const router = Router();

router.param("id", (req, res, next, value) => {
    if (!/^[0-9]+$/.test(value))
        return res.status(400).json({ error: "param id must be numeric!" });
    next();
});

router.get("/", bookController.findAll);
router.get("/:id", bookController.findOne);
router.post("/", bookController.create);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.remove);

module.exports = router;
