// 📌 workouts data en memoria
let workouts = [
  {
    id: 1,
    name: "Push Day",
    date: "2025-10-03",
    exercises: [
      { id: 1, name: "Bench Press", sets: 4, reps: 10, weight: 80 },
      { id: 2, name: "Overhead Press", sets: 3, reps: 8, weight: 40 }
    ]
  },
  {
    id: 2,
    name: "Leg Day",
    date: "2025-10-04",
    exercises: [
      { id: 1, name: "Squats", sets: 4, reps: 12, weight: 100 },
      { id: 2, name: "Lunges", sets: 3, reps: 12, weight: 40 }
    ]
  }
];

module.exports = workouts;
