let currentId = 1;

const createWorkout = (req, res) => {
  const { title, date, exercises } = req.body;

  const newWorkout = {
    id: currentId++,
    title,
    date,
    exercises: exercises || [],
  };

  workouts.push(newWorkout);
  return res.status(201).json(newWorkout);
};

module.exports = {
  getWorkouts: (req, res) => res.json(workouts),
  getWorkoutById: (req, res) => {
    const { id } = req.params;
    const workout = workouts.find(w => w.id === parseInt(id));
    if (!workout) return res.status(404).json({ error: "Entrenamiento no encontrado" });
    return res.json(workout);
  },
  createWorkout,
  updateWorkout: (req, res) => res.json({ message: "no implementado" }),
  patchWorkout: (req, res) => res.json({ message: "no implementado" }),
  deleteWorkout: (req, res) => res.json({ message: "no implementado" }),
};
