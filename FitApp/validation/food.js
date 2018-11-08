const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFoodInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.servingsize = !isEmpty(data.servingsize) ? data.servingsize : "";
  data.kcal = !isEmpty(data.kcal) ? data.kcal : "";
  data.fat = !isEmpty(data.fat) ? data.fat : "";
  data.protein = !isEmpty(data.protein) ? data.protein : "";
  data.carbs = !isEmpty(data.carbs) ? data.carbs : "";
  data.fiber = !isEmpty(data.fiber) ? data.fiber : "";
  data.sugar = !isEmpty(data.sugar) ? data.sugar : "";
  if (Validator.isEmpty(data.name)) {
    errors.name = " name field is required";
  }

  if (Validator.isEmpty(data.servingsize)) {
    errors.servingsize = "serving size field is required";
  }

  if (Validator.isEmpty(data.kcal)) {
    errors.kcal = "kcal is required";
  }

  if (Validator.isEmpty(data.fat)) {
    errors.fat = "fat field is required";
  }

  if (Validator.isEmpty(data.protein)) {
    errors.protein = "protein field is required";
  }

  if (Validator.isEmpty(data.carbs)) {
    errors.carbs = "carbs field is required";
  }

  if (Validator.isEmpty(data.fiber)) {
    errors.fiber = "fiber field is required";
  }

  if (Validator.isEmpty(data.sugar)) {
    errors.sugar = "sugar field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
