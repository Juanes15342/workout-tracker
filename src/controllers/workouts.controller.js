const deleteWorkout = (req, res) => {
  const { id } = req.params;
  const index = workouts.findIndex(w => w.id === parseInt(id));
  if (index === -1) return res.status(404).json({ error: "Entrenamiento no encontrado" });

  workouts.splice(index, 1);
  return res.status(204).send();
};

module.exports = {
  ...module.exports,
  deleteWorkout,
};
