// ERROR 400 POST FALTAN PUT Y DELETE

const router = require("express").Router();
const articleUsesCases = require("../usescases/article");

router.get("/", async (req, res) => {
  try {
    const articles = await articleUsesCases.getAll();
    res.json({ ok: true, payload: articles });
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
  const { title } = req.body.title;
  const { article } = req.body.article;
  const { user } = req.body.user;
  // const { date } = req.body.date;

  try {
    const payload = await articleUsesCases.create(title, article, user);
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