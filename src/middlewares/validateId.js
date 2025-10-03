const validateId = (req, res, next) => {
  const id = parseInt(req.params.id);

  if (isNaN(id) || id <= 0) {
    return res.status(400).json({
      error: "ID inválido. Debe ser un número entero mayor que 0.",
    });
  }

  next(); // si todo bien, sigue al siguiente handler
};

module.exports = validateId;