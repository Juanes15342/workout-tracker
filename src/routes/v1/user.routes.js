// src/routes/v1/users.router.js
const express = require('express');
const router = express.Router();
const users = require('../../data/users');

// GET /api/v1/users
router.get('/', (req, res) => {
  // Respuesta 200 con la lista completa
  return res.status(200).json(users);
});

// GET /api/v1/users/:id
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);

  // Validación sencilla: id numérico
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido. Debe ser un número.' });
  }

  const user = users.find(u => u.id === id);
  if (!user) {
    // 404 si no existe
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  // 200 con el usuario
  return res.status(200).json(user);
});

module.exports = router;