const { progress, createProgress, updateProgress, deleteProgress} = require("../data/progress");

// Listar progreso
const listProgress = (req, res) => {
  res.json(progress);
};

// Obtener un progreso
const getProgress = (req, res) => {
  const id = parseInt(req.params.id);
  const item = progress.find((p) => p.id === id);
 if (isNaN(id)) return res.status(400).json({ message: "ID inválido" });

const { progress, createProgress } = require("../data/progress");

// Crear progreso
const addProgress = (req, res) => {
  const { userId, exercise, reps } = req.body;
  if (!Number.isInteger(userId) || typeof exercise !== "string" || !Number.isInteger(reps)) {
  return res.status(400).json({ message: "Datos inválidos" });
}
  const newProgress = createProgress({ userId, exercise, reps });
  res.status(201).json(newProgress);
};

const editProgress = (req, res) => {
  const id = parseInt(req.params.id);
  const updated = updateProgress(id, req.body);
  if (!updated) return res.status(404).json({ message: "Progreso no encontrado" });
  res.json(updated);
};

const removeProgress = (req, res) => {
  const id = parseInt(req.params.id);
  const deleted = deleteProgress(id);
  if (!deleted) return res.status(404).json({ message: "Progreso no encontrado" });
  res.json({ message: "Progreso eliminado" });
};

module.exports = { listProgress, getProgress, addProgress, editProgress, removeProgress }}