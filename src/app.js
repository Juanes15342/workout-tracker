const express = require("express");
const app = express();
const { port } = require('./config/env'); // Import the port from the env file

// Inicializacion del servidor y primera ruta

// Importar rutas
const routes = require('./routes');

// Middleware para parsear JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hola mi server en Express");
});

// Configurar rutas con prefijo /api
app.use('/api', routes);


// Inicio del servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
