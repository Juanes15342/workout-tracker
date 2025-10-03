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
router.post("/", addExercise);

router.put("/:id", editExercise);

router.patch("/:id", editExercise);

router.delete("/:id", removeExercise);

module.exports = router;