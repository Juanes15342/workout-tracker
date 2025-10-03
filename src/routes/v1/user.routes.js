const express = require("express");
const router = express.Router();

// GET /users → listar todos los usuarios
router.get("/", (req, res) => {
  res.send("Lista de usuarios");
});

// GET /users/:id → obtener usuario por ID
router.get("/:id", (req, res) => {
  res.send(`Usuario con ID: ${req.params.id}`);
});

// POST /users → crear un usuario
router.post("/", (req, res) => {
  res.send("Usuario creado");
});

// PUT /users/:id → actualizar usuario completo
router.put("/:id", (req, res) => {
  res.send(`Usuario con ID ${req.params.id} actualizado completamente`);
});

// PATCH /users/:id → actualización parcial
router.patch("/:id", (req, res) => {
  res.send(`Usuario con ID ${req.params.id} actualizado parcialmente`);
});

// DELETE /users/:id → eliminar usuario
router.delete("/:id", (req, res) => {
  res.send(`Usuario con ID ${req.params.id} eliminado`);
});

module.exports = router;

const express = require("express");
const userRoutes = require("./src/routes/v1/user.routes");

const app = express();
app.use(express.json());

// Prefijo de versión
app.use("/api/v1/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
