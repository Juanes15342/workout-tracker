const express = require('express');
const router = express.Router();

const usersRoutes = require('./progress.routes');

router.use('/users', usersRoutes);

module.exports = router;