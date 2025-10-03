const express = require('express');
const router = express.Router();

const usersRoutes = require('./exercises.routes');

router.use('/users', usersRoutes);

module.exports = router;