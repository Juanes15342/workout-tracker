const createWorkout = (req, res) => {
  const { title, date, exercises } = req.body;

  if (!title || typeof title !== "string") {
    return res.status(400).json({ error: "El título es requerido y debe ser texto" });
  }
  if (!date || isNaN(Date.parse(date))) {
    return res.status(400).json({ error: "La fecha es requerida y debe ser válida" });
  }
  if (!Array.isArray(exercises)) {
    return res.status(400).json({ error: "Ejercicios debe ser un array" });
  }

  const newWorkout = {
    id: currentId++,
    title,
    date,
    exercises,
  };

  workouts.push(newWorkout);
  return res.status(201).json(newWorkout);
};
