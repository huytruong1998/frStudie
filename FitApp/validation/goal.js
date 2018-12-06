const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFoodInput(data) {
  let errors = {};

  data.consumed = !isEmpty(data.consumed) ? data.consumed : "";
  data.consumedgoal = !isEmpty(data.consumedgoal) ? data.consumedgoal : "";
  // data.burnt = !isEmpty(data.burnt) ? data.burnt : "";
  // data.burntgoal = !isEmpty(data.burntgoal) ? data.burntgoal : "";
  // if (Validator.isEmpty(data.consumed)) {
  //   errors.consumed = " Cosumed calories is required";
  // }

  if (Validator.isEmpty(data.consumedgoal)) {
    errors.consumedgoal = "Consumed goal is required";
  }

  // if (Validator.isEmpty(data.burnt)) {
  //   errors.burnt = "burnt calories is required";
  // }

  if (Validator.isEmpty(data.burntgoal)) {
    errors.burntgoal = "Burnt goal is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
