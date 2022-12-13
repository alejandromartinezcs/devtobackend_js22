const mongoose = require("mongoose");
const { Schema } = mongoose;

const schema = new Schema({
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  username: { type: String, required: true, trim: true },
  img: { data:Buffer, contentType: String }
});

const model = mongoose.model("User", schema);

module.exports = {
  schema,
  model,
};
