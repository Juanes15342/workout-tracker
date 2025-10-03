const exercises = require("../data/exercises.data");

exports.getExercises = (req, res) => {
  res.json(exercises);
};

exports.getExerciseById = (req, res) => {
  const { id } = req.params;
  const exercise = exercises.find(e => e.id === parseInt(id));
  if (!exercise) return res.status(404).json({ error: "Ejercicio no encontrado" });
  res.json(exercise);
};