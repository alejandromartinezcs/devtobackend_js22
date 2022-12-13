const fs = require("fs/promises");
const router = require("express").Router();
const articleUsesCases = require("../usescases/article");

router.get("/", async (req, res) => {
  try {
    const article = await articleUsesCases.getAll();
    res.json({ ok: true, payload: article });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const { title, article, user, date } = await articleUsesCases.getById(id);
    res.json({
      ok: true,
      payload: { title, article, user, date },
    });
  } catch (error) {
    res.status(400).json({ ok: false, message: error });
  }
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  const { article } = req.body;
  const { user } = req.body;
  const { date } = req.body;

  try {
    const payload = await articleUsesCases.create(article);
    res.json({
      ok: true,
      message: "Article created successfully",
      payload,
    });
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error,
    });
    console.log(error);
  }
});

module.exports = router;