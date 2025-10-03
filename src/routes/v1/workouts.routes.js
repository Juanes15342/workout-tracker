const express = require("express");
const router = express.Router();

const workoutController = require("../../controllers/workouts.controller.js");

// ENDPOINTS
router.get("/", workoutController.getWorkouts);          // Listar todos
router.get("/:id", workoutController.getWorkoutById);    // Obtener por id
router.post("/", workoutController.createWorkout);       // Crear nuevo
router.put("/:id", workoutController.updateWorkout);     // Actualizar completo
router.patch("/:id", workoutController.patchWorkout);    // Actualización parcial
router.delete("/:id", workoutController.deleteWorkout);  // Eliminar

module.exports = router;
