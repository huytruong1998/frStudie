const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

//Load goal model
const Goal = require("../../models/Goal");
//Load User profile
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({ msg: "Goal work" }));

const validateGoal = require("../../validation/goal");
// @route POST api/goal
// @desc POST current usergoalfile
// @access Private
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    // const { errors, isValid } = validateGoal(req.body);
    // // Check validation

    // if (!isValid) {
    //   //return any errors with 400 status
    //   return res.status(400).json(errors);
    // }
    const goalFields = {};
    goalFields.user = req.user.id;
    if (req.body.consumed) goalFields.consumed = req.body.consumed;
    if (req.body.consumedgoal) goalFields.consumedgoal = req.body.consumedgoal;
    if (req.body.burnt) goalFields.burnt = req.body.burnt;
    if (req.body.burntgoal) goalFields.burntgoal = req.body.burntgoal;

    Goal.findOne({ user: req.user.id }).then(goal => {
      if (goal) {
        //update
        Goal.findOneAndUpdate(
          { user: req.user.id },
          { $set: goalFields },
          { new: true }
        ).then(goal => res.json(goal));
      } else {
        //create

        //check if handle exist
        new Goal(goalFields).save().then(goal => res.json(goal));
      }
    });
  }
);

// @route GET api/goal
// @desc GET current user goal file
// @access Private
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};
    Goal.findOne({ user: req.user.id })
      .then(progress => {
        if (!progress) {
          errors.noprogress = "There are no PROGRESS for this user";
          return res.status(404).json(errors);
        }
        res.json(progress);
      })
      .catch(err => {
        res.status(404).json(err);
      });
  }
);

module.exports = router;
