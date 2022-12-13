const Article = require("../../models/articles").model;

const getAll = async () => {
  return await Article.find({}).exec();
};

const getById = async (id) => await Taks.findById(id).exec();

const create = async (title) => {
  const article = new Article({ title });
  return await article.save();

};

const update = async (id, data) => {
  const { title, article, user, date } = data;

  data.title = title ? title : data.title;
  data.article = article ? article : data.article;
  data.user = user ? user : data.user;
  data.date = date ? date : data.date;

  return await article.findByIdAndUpdate(id, data).exec();
};

const del = async (id) => await Article.findByIdAndDelete(id).exec();

module.exports = {
  create,
  del,
  update,
  getById,
  getAll,
};