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
  const { title, article } = req.body;

  try {
    const post = await articleUsesCases.create({title, article });
    const payload = {
      name: post.title,
      article: post.article
    };
    res.status(201).json({
      ok: true, 
      payload})
  } catch (error) {
    res.status(400).json({
      ok: false,
      message: error,
    });
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, article } = req.body;

  try {
    const data = { title, article };
    const articles = await articleUsesCases.update(id, data);
    res.json({ ok: true, payload: articles });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { title, article } = await articleUsesCases.del(id);

    res.json({ ok: true, payload: { title, article } });
  } catch (error) {
    const { message } = error;
    res.status(400).json({ ok: false, message });
  }
});


module.exports = router;