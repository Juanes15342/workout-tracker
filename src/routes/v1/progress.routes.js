const express = require("express");
const router = express.Router();

const { listProgress, getProgress,addProgress,editProgress } = require("../../controllers/progress.controller");

// Rutas GET básicas
router.get("/", listProgress);
router.get("/:id", getProgress);


router.post("/", addProgress);

router.put("/:id", editProgress);
router.patch("/:id", editProgress);


module.exports = router;