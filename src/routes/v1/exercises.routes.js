const express = require("express");
const router = express.Router();

const {
  listExercises,
  getExercise,
  addExercise,
  editExercise
} = require("../../controllers/exercises.controller");
const { getAllExercises, deleteExercise } = require("../../data/exercises");

const updateExercise = (id, updates) => {
  const index = exercises.findIndex((ex) => ex.id === id);
  if (index === -1) return null;

  exercises[index] = { ...exercises[index], ...updates };
  return exercises[index];
};

const validateId = require("../../middlewares/validateId");
// Rutas GET
router.get("/", getAllExercises);
router.get("/:id", validateId, getExercise);

// Ruta POST
router.post("/",addExercise);

// Ruta PUT y PATCH
router.put("/:id", validateId, updateExercise);
router.patch("/:id", validateId, editExercise );

// Ruta DELETE
router.delete("/:id", validateId,deleteExercise );

module.exports = router;
