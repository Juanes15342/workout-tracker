const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const workoutRoutes = require("./workouts.routes");

router.use("/users", userRoutes);
router.use("/workouts", workoutRoutes);

module.exports = router;
