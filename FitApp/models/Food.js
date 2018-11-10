const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const FoodSchema = new Schema({
  name: { type: String, require: true },
  servingsize: { type: Number, require: true },
  kcal: { type: Number, require: true },
  fat: { type: Number, require: true },
  protein: { type: Number, require: true },
  carbs: { type: Number, require: true },
  fiber: { type: Number, require: true },
  sugar: { type: Number, require: true }
});

module.exports = Food = mongoose.model("food", FoodSchema);
