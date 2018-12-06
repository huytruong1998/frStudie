const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const GoalSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  consumed: {
    type: Number
  },
  consumedgoal: {
    type: Number
  },
  burntgoal: {
    type: Number
  },
  burnt: {
    type: Number
  }
});

module.exports = Goal = mongoose.model("goal", GoalSchema);
