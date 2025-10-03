const express = require("express");
const router = express.Router();

const {
  listExercises,
  getExercise,
  addExercise
} = require("../../controllers/exercises.controller");

const updateExercise = (id, updates) => {
  const index = exercises.findIndex((ex) => ex.id === id);
  if (index === -1) return null;

  exercises[index] = { ...exercises[index], ...updates };
  return exercises[index];
};
// Rutas GET
router.get("/", listExercises);
router.get("/:id", getExercise);

// Ruta POST
const validateId = require("../../middlewares/validateId");

router.get("/:id", validateId, getExercise);
router.put("/:id", validateId, editExercise);
router.patch("/:id", validateId, editExercise);
router.delete("/:id", validateId, removeExercise);

module.exports = router;