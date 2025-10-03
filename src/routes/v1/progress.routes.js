const express = require("express");
const router = express.Router();

const progressController = require("../../controllers/progress.controller");

// ENDPOINTS
router.get("/", progressController.getProgress);          // listar progreso
router.get("/:id", progressController.getProgressById);   // obtener por id
router.post("/", progressController.createProgress);      // crear progreso
router.put("/:id", progressController.updateProgress);    // actualizar completo
router.patch("/:id", progressController.patchProgress);   // actualización parcial
router.delete("/:id", progressController.deleteProgress); // eliminar

module.exports = router;
