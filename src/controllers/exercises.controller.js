const {
  getAllExercises,
  getExerciseById,
  createExercise,
  updateExercise,
   deleteExercise
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

const editExercise = (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  const updated = updateExercise(Number(id), updates);
  if (!updated) {
    return res.status(404).json({ message: "Exercise not found" });
  }

  res.json(updated);
};

const removeExercise = (req, res) => {
  const { id } = req.params;
  const success = deleteExercise(Number(id));

  if (!success) {
    return res.status(404).json({ message: "Exercise not found" });
  }

  res.json({ message: "Exercise deleted successfully" });
};

module.exports = {
  listExercises,
  getExercise,
  addExercise,
  editExercise,
  removeExercise   // 👈 exportar
};