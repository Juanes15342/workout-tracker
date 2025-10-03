const express = require("express");
const router = express.Router();

const {
  listExercises,
  getExercise,
  addExercise
} = require("../../controllers/exercises.controller");

// Rutas GET
router.get("/", listExercises);
router.get("/:id", getExercise);

// Ruta POST
router.post("/", addExercise);

module.exports = router;