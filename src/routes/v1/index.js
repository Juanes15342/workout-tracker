const express = require("express");
const router = express.Router();

<<<<<<< HEAD
const userRoutes = require("./user.routes");
const workoutRoutes = require("./workouts.routes");
=======
const usersRoutes = require('./progress.routes');
>>>>>>> feat/progress

router.use("/users", userRoutes);
router.use("/workouts", workoutRoutes);

<<<<<<< HEAD
module.exports = router;
=======
const createProgress = (newProgress) => {
  const progressItem = { id: progress.length + 1, ...newProgress };
  progress.push(progressItem);
  return progressItem;
};

module.exports = { progress, createProgress };

>>>>>>> feat/progress
