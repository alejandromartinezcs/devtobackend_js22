const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  title: { type: String, required: true, trim: true },
  article: { type: String, trim: true },
  user: { type: mongoose.ObjectId, ref: "User"},
  date: { type: Date, trim: true }
});

const model = mongoose.model("Task", schema);

module.exports = {
  schema,
  model,
};
