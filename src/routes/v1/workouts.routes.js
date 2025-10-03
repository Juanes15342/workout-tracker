const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workouts.controller");

// ENDPOINTS SCAFFOLD
router.get("/", workoutController.getWorkouts);
router.get("/:id", workoutController.getWorkoutById);
router.post("/", workoutController.createWorkout);
router.put("/:id", workoutController.updateWorkout);
router.patch("/:id", workoutController.patchWorkout);
router.delete("/:id", workoutController.deleteWorkout);

module.exports = router;
