const {
  getAllExercises,
  getExerciseById,
  createExercise
} = require("../data/exercises");

// GET lista
const listExercises = (req, res) => {
  res.json(getAllExercises());
};

// GET individual
const getExercise = (req, res) => {
  const { id } = req.params;
  const exercise = getExerciseById(Number(id));
  if (!exercise) {
    return res.status(404).json({ message: "Exercise not found" });
  }
  res.json(exercise);
};

// POST crear
const addExercise = (req, res) => {
  const { name, reps, sets } = req.body;
  if (!name || !reps || !sets) {
    return res.status(400).json({ message: "Missing fields" });
  }
  const newExercise = createExercise({ name, reps, sets });
  res.status(201).json(newExercise);
};

module.exports = {
  listExercises,
  getExercise,
  addExercise
};