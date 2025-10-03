const workouts = require("../data/workouts");

const getWorkouts = (req, res) => {
  return res.json(workouts);
};

const getWorkoutById = (req, res) => {
  const { id } = req.params;
  const workout = workouts.find(w => w.id === parseInt(id));
  if (!workout) {
    return res.status(404).json({ error: "Entrenamiento no encontrado" });
  }
  return res.json(workout);
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout: (req, res) => res.json({ message: "no implementado" }),
  updateWorkout: (req, res) => res.json({ message: "no implementado" }),
  patchWorkout: (req, res) => res.json({ message: "no implementado" }),
  deleteWorkout: (req, res) => res.json({ message: "no implementado" }),
};

