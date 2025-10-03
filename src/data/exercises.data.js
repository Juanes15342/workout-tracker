// src/data/exercises.js

let exercises = [
  { id: 1, name: "Push Up", reps: 15, sets: 3 },
  { id: 2, name: "Squat", reps: 20, sets: 4 }
];

// Obtener todos
const getAllExercises = () => exercises;

// Obtener uno por id
const getExerciseById = (id) => exercises.find((ex) => ex.id === id);

// Crear nuevo ejercicio
const createExercise = (exercise) => {
  const newExercise = { id: exercises.length + 1, ...exercise };
  exercises.push(newExercise);
  return newExercise;
};

module.exports = {
  getAllExercises,
  getExerciseById,
  createExercise
};