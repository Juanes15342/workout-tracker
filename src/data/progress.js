let progress = [
  { id: 1, userId: 1, exercise: "Push Up", reps: 15 },
  { id: 2, userId: 1, exercise: "Squat", reps: 20 }
];

const updateProgress = (id, updates) => {
  const index = progress.findIndex((p) => p.id === id);
  if (index === -1) return null;
  progress[index] = { ...progress[index], ...updates };
  return progress[index];

};

const createProgress = (newProgress) => {
  const progressItem = { id: progress.length + 1, ...newProgress };
  progress.push(progressItem);
  return progressItem;
};

const deleteProgress = (id) => {
  const index = progress.findIndex((p) => p.id === id);
  if (index === -1) return false;
  progress.splice(index, 1);
  return true;
};

module.exports = { progress, createProgress, updateProgress, deleteProgress };