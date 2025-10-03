const updateWorkout = (req, res) => {
  const { id } = req.params;
  const index = workouts.findIndex(w => w.id === parseInt(id));
  if (index === -1) return res.status(404).json({ error: "Entrenamiento no encontrado" });

  const { title, date, exercises } = req.body;
  workouts[index] = { id: parseInt(id), title, date, exercises };

  return res.json(workouts[index]);
};

const patchWorkout = (req, res) => {
  const { id } = req.params;
  const workout = workouts.find(w => w.id === parseInt(id));
  if (!workout) return res.status(404).json({ error: "Entrenamiento no encontrado" });

  const { title, date, exercises } = req.body;
  if (title) workout.title = title;
  if (date) workout.date = date;
  if (exercises) workout.exercises = exercises;

  return res.json(workout);
};

module.exports = {
  ...module.exports,
  updateWorkout,
  patchWorkout,
};

