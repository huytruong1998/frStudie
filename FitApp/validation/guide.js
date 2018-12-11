const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateFoodInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.guidetext = !isEmpty(data.guidetext) ? data.guidetext : "";
  data.imgurl = !isEmpty(data.imgurl) ? data.imgurl : "";
  // data.burnt = !isEmpty(data.burnt) ? data.burnt : "";
  // data.burntgoal = !isEmpty(data.burntgoal) ? data.burntgoal : "";
  // if (Validator.isEmpty(data.consumed)) {
  //   errors.consumed = " Cosumed calories is required";
  // }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name is required";
  }

  if (Validator.isEmpty(data.imgurl)) {
    errors.imgurl = "image url is required";
  }

  if (Validator.isEmpty(data.guidetext)) {
    errors.guidetext = "Guide is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
