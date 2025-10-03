const express = require("express");
const router = express.Router();

const { listProgress, getProgress } = require("../../controllers/progress.controller");

// Rutas GET básicas
router.get("/", listProgress);
router.get("/:id", getProgress);


router.post("/", addProgress);

module.exports = router;