// src/routes/v1/user.routes.js
const express = require('express');
const router = express.Router();
const users = require('../../data/users'); // array simulado
const { createUser } = require('../../controllers/users.controller');


// GET /api/v1/users  -> ya implementado
router.get('/', (req, res) => {
  res.status(200).json(users);
});

// GET /api/v1/users/:id -> ya implementado
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) {
    return res.status(400).json({ message: 'ID inválido. Debe ser un número.' });
  }
  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
  return res.status(200).json(user);
});

/*
  POST /api/v1/users
  Body esperado (JSON): { "name": "Juan", "email": "juan@example.com", "password": "1234" }
*/
router.post('/', (req, res) => {
  const { name, email, password } = req.body;

  // 1) Validaciones básicas
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'Faltan datos: name, email y password son obligatorios.' });
  }

  // 2) Validación simple de formato de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Email con formato inválido.' });
  }

  // 3) Evitar email duplicado
  const exists = users.some(u => u.email.toLowerCase() === email.toLowerCase());
  if (exists) {
    return res.status(409).json({ message: 'Ya existe un usuario con ese email.' });
  }

  // 4) Crear el nuevo usuario (ID incremental, createdAt)
  const newUser = {
    id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name,
    email,
    // Nota: en producción deberías hashear la contraseña con bcrypt. Aquí la guardamos tal cual
    password,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);

  // 5) Responder 201 Created, con Location y body del recurso (sin devolver password idealmente)
  const { password: _pwd, ...userWithoutPassword } = newUser;
  res.location(`/api/v1/users/${newUser.id}`);
  return res.status(201).json(userWithoutPassword);
});


router.post('/', createUser);

router.put('/:id', updateUser);

 router.delete('/:id', deleteUser);

 router.get('/', getUsers)

module.exports = router;

