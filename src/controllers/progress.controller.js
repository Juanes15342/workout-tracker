let progress = require("../data/progress");

// 📌 GET todos
const getProgress = (req, res) => {
  res.json(progress);
};

// 📌 GET por id
const getProgressById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = progress.find(p => p.id === id);
  if (!item) return res.status(404).json({ message: "Progreso no encontrado" });
  res.json(item);
};

// 📌 POST nuevo
const createProgress = (req, res) => {
  const { userId, workoutId, status } = req.body;
  const newProgress = {
    id: progress.length + 1,
    userId,
    workoutId,
    status: status || "pending"
  };
  progress.push(newProgress);
  res.status(201).json(newProgress);
};

// 📌 PUT actualizar completo
const updateProgress = (req, res) => {
  const id = parseInt(req.params.id);
  const index = progress.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: "Progreso no encontrado" });

  const { userId, workoutId, status } = req.body;
  progress[index] = { id, userId, workoutId, status };
  res.json(progress[index]);
};

// 📌 PATCH actualizar parcial
const patchProgress = (req, res) => {
  const id = parseInt(req.params.id);
  const item = progress.find(p => p.id === id);
  if (!item) return res.status(404).json({ message: "Progreso no encontrado" });

  const { userId, workoutId, status } = req.body;
  if (userId) item.userId = userId;
  if (workoutId) item.workoutId = workoutId;
  if (status) item.status = status;

  res.json(item);
};

// 📌 DELETE eliminar
const deleteProgress = (req, res) => {
  const id = parseInt(req.params.id);
  const index = progress.findIndex(p => p.id === id);
  if (index === -1) return res.status(404).json({ message: "Progreso no encontrado" });

  const deleted = progress.splice(index, 1);
  res.json(deleted[0]);
};

module.exports = {
  getProgress,
  getProgressById,
  createProgress,
  updateProgress,
  patchProgress,
  deleteProgress
};
