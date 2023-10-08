const express = require("express");
const router = express.Router();
const {
  listaTareas,
  nuevaTareas,
  modificarTareas,
} = require("../controllers/task");

router.get("/task", listaTareas);
router.post("/task", nuevaTareas);
router.put("/task/:id", modificarTareas);

module.exports = router;
