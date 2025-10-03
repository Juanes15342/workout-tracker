let workouts = require("../data/workouts");

// 📌 GET: listar todos los workouts
const getWorkouts = (req, res) => {
  res.json(workouts);
};

// 📌 GET: obtener un workout por id
const getWorkoutById = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

  const workout = workouts.find((w) => w.id === id);
  if (!workout) return res.status(404).json({ message: "Workout no encontrado" });

  res.json(workout);
};

// 📌 POST: crear un workout
const createWorkout = (req, res) => {
  const { name, date, exercises } = req.body;
  if (!name || !date) {
    return res.status(400).json({ message: "Faltan campos obligatorios (name, date)" });
  }

  const newWorkout = {
    id: workouts.length + 1,
    name,
    date,
    exercises: exercises || []
  };

  workouts.push(newWorkout);
  res.status(201).json(newWorkout);
};

// 📌 PUT: actualizar un workout (reemplazo completo)
const updateWorkout = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

  const { name, date, exercises } = req.body;
  const index = workouts.findIndex((w) => w.id === id);

  if (index === -1) return res.status(404).json({ message: "Workout no encontrado" });

  workouts[index] = { id, name, date, exercises: exercises || [] };
  res.json(workouts[index]);
};

// 📌 PATCH: actualización parcial
const patchWorkout = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

  const workout = workouts.find((w) => w.id === id);
  if (!workout) return res.status(404).json({ message: "Workout no encontrado" });

  const { name, date, exercises } = req.body;
  if (name) workout.name = name;
  if (date) workout.date = date;
  if (exercises) workout.exercises = exercises;

  res.json(workout);
};

// 📌 DELETE: eliminar workout
const deleteWorkout = (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

  const index = workouts.findIndex((w) => w.id === id);
  if (index === -1) return res.status(404).json({ message: "Workout no encontrado" });

  const deleted = workouts.splice(index, 1);
  res.json(deleted[0]);
};

module.exports = {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  patchWorkout,
  deleteWorkout
};