const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ScheduleSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  },
  Monday: [
    {
      foods: {
        type: Schema.Types.ObjectId,
        ref: "foods"
      },
      name: { type: String, require: true },
      servingsize: { type: Number, require: true },
      kcal: { type: Number, require: true },
      fat: { type: Number, require: true },
      protein: { type: Number, require: true },
      carbs: { type: Number, require: true },
      fiber: { type: Number, require: true },
      sugar: { type: Number, require: true }
    }
  ],
  Tuesday: [
    {
      foods: {
        type: Schema.Types.ObjectId,
        ref: "foods"
      },
      name: { type: String, require: true },
      servingsize: { type: Number, require: true },
      kcal: { type: Number, require: true },
      fat: { type: Number, require: true },
      protein: { type: Number, require: true },
      carbs: { type: Number, require: true },
      fiber: { type: Number, require: true },
      sugar: { type: Number, require: true }
    }
  ],
  Wednesday: [
    {
      foods: {
        type: Schema.Types.ObjectId,
        ref: "foods"
      },
      name: { type: String, require: true },
      servingsize: { type: Number, require: true },
      kcal: { type: Number, require: true },
      fat: { type: Number, require: true },
      protein: { type: Number, require: true },
      carbs: { type: Number, require: true },
      fiber: { type: Number, require: true },
      sugar: { type: Number, require: true }
    }
  ],
  Thursday: [
    {
      foods: {
        type: Schema.Types.ObjectId,
        ref: "foods"
      },
      name: { type: String, require: true },
      servingsize: { type: Number, require: true },
      kcal: { type: Number, require: true },
      fat: { type: Number, require: true },
      protein: { type: Number, require: true },
      carbs: { type: Number, require: true },
      fiber: { type: Number, require: true },
      sugar: { type: Number, require: true }
    }
  ],
  Friday: [
    {
      foods: {
        type: Schema.Types.ObjectId,
        ref: "foods"
      },
      name: { type: String, require: true },
      servingsize: { type: Number, require: true },
      kcal: { type: Number, require: true },
      fat: { type: Number, require: true },
      protein: { type: Number, require: true },
      carbs: { type: Number, require: true },
      fiber: { type: Number, require: true },
      sugar: { type: Number, require: true }
    }
  ],
  Saturday: [
    {
      foods: {
        type: Schema.Types.ObjectId,
        ref: "foods"
      },
      name: { type: String, require: true },
      servingsize: { type: Number, require: true },
      kcal: { type: Number, require: true },
      fat: { type: Number, require: true },
      protein: { type: Number, require: true },
      carbs: { type: Number, require: true },
      fiber: { type: Number, require: true },
      sugar: { type: Number, require: true }
    }
  ],
  Sunday: [
    {
      foods: {
        type: Schema.Types.ObjectId,
        ref: "foods"
      },
      name: { type: String, require: true },
      servingsize: { type: Number, require: true },
      kcal: { type: Number, require: true },
      fat: { type: Number, require: true },
      protein: { type: Number, require: true },
      carbs: { type: Number, require: true },
      fiber: { type: Number, require: true },
      sugar: { type: Number, require: true }
    }
  ]
});
