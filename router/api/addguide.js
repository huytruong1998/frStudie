const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//Load Food Model
const Guide = require("../../models/Guide");

//load validation
const validateGuideInput = require("../../validation/guide");
router.get("/test", (req, res) => res.json({ msg: "Guide work" }));
// @route POST api/guide
// @desc Add guide to database
// @access Public

router.get("/test2", (req, res) => res.json({ msg: "Guide test softagran" }));

router.post("/add", (req, res) => {
  const { errors, isValid } = validateGuideInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  Guide.findOne({ name: req.body.name }).then(guide => {
    if (guide) {
      return res.status(400).json("Guide already exists");
    } else {
      const newGuide = new Guide({
        name: req.body.name,
        guidetext: req.body.guidetext,
        imgurl: req.body.imgurl
      });
      newGuide.save().then(newGuide => res.json(newGuide));
    }
  });
});

// @route GET api/addfood
// @desc Add guide to database
// @access Public
router.get("/", (req, res) => {
  const errors = {};
  Guide.find()
    .then(guide => {
      if (!guide) {
        errors.noguide = "There is no guide in the database";
        return res.status(404).json(errors);
      }
      res.json(guide);
    })
    .catch(err => res.status(404).json({ guide: "There are no guide" }));
});
module.exports = router;
