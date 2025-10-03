const express = require("express");
const router = express.Router();


const userRoutes = require("./user.routes");
const workoutRoutes = require("./workouts.routes");
const progressRoutes = require('./progress.routes');

const exerciseRoutes = require('./exercises.routes');
const { progress } = require("../../data/progress");

router.use("/progress", progressRoutes);
router.use("/users", userRoutes);
router.use("/workouts", workoutRoutes);
router.use("exercisesa", exerciseRoutes)

 
module.exports = router;

const createProgress = (newProgress) => {
  const progressItem = { id: progress.length + 1, ...newProgress };
  progress.push(progressItem);
  return progressItem;
};

module.exports = router;
 
