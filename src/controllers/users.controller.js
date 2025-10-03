const createUser = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: "Faltan datos obligatorios" });
  }

  // Respuesta mock (todavía sin DB)
  res.status(201).json({
    id: Date.now(),
    name,
    email
  });
};

function updateUser(req, res) {
  const id = parseInt(req.params.id, 10);
  const { name, email, password } = req.body;

  const user = users.find(u => u.id === id);
  if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });

  if (name) user.name = name;
  if (email) user.email = email;
  if (password) user.password = password;

  res.status(200).json(user);
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) return res.status(404).json({ message: 'Usuario no encontrado' });

  const deleted = users.splice(index, 1);
  res.status(200).json({ message: 'Usuario eliminado', deleted });
}

function deleteUser(req, res) {
  const id = parseInt(req.params.id, 10);
  const index = users.findIndex(u => u.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Usuario no encontrado' });
  }

  const deletedUser = users.splice(index, 1); // elimina 1 elemento
  res.status(200).json({ message: 'Usuario eliminado', user: deletedUser[0] });
}

function getUsers(req, res) {
  let { limit } = req.query;

  // Validación de query param
  if (limit && isNaN(limit)) {
    return res.status(400).json({ message: 'El parámetro limit debe ser numérico' });
  }

  let result = users;
  if (limit) {
    result = users.slice(0, Number(limit));
  }

  res.status(200).json(result);
}




mmodule.exports = {
  createUser,
  updateUser,
  deleteUser,
 getUsers
};

