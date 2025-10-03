const express = require('express');
const router = express.Router();

const usersRoutes = require('./progress.routes');

router.use('/users', usersRoutes);

const createProgress = (newProgress) => {
  const progressItem = { id: progress.length + 1, ...newProgress };
  progress.push(progressItem);
  return progressItem;
};

module.exports = { progress, createProgress };

