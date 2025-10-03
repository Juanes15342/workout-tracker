const { progress } = require("../data/progress");

// Listar progreso
const listProgress = (req, res) => {
  res.json(progress);
};

// Obtener un progreso
const getProgress = (req, res) => {
  const id = parseInt(req.params.id);
  const item = progress.find((p) => p.id === id);
  if (!item) return res.status(404).json({ message: "Progreso no encontrado" });
  res.json(item);
};

const { progress, createProgress } = require("../data/progress");

// Crear progreso
const addProgress = (req, res) => {
  const { userId, exercise, reps } = req.body;
  if (!userId || !exercise || !reps) {
    return res.status(400).json({ message: "Todos los campos son requeridos" });
  }
  const newProgress = createProgress({ userId, exercise, reps });
  res.status(201).json(newProgress);
};

module.exports = { listProgress, getProgress, addProgress };