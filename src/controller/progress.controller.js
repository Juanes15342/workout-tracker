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

module.exports = { listProgress, getProgress };