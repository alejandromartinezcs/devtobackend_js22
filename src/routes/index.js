const usersRouter = require("./userRouter");
const articleRouter = require("./articleRouter");

const apiRouter = (app) => {
    app.use("/users", usersRouter);
    app.use("/article", articleRouter);
};

module.exports = apiRouter;