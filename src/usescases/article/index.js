const Article = require("../../models/articles").model;

const getAll = async () => {
    return await Article.find({}).exec();
};

