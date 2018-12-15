const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const GuideSchema = new Schema({
  name: { type: String, require: true },
  guidetext: { type: String, require: true },
  imgurl: { type: String, require: true }
});

module.exports = Guide = mongoose.model("guide", GuideSchema);
