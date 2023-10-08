const knex = require("../config/knexfile");

const listaTareas = async (req, res) => {
  try {
    const resultado = await knex("tarea");
    res.status(200).json(resultado);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const nuevaTareas = async (req, res) => {
  const { tarea_id, titulo, prioridad_id, usuario_id, completado } = req.body;
  try {
    await knex("tarea").insert({
      tarea_id: tarea_id,
      titulo: titulo,
      prioridad_id: prioridad_id,
      usuario_id: usuario_id,
      completado: completado,
    });
    res.status(200).json({ message: "Se agrego correctamente la tarea" });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const modificarTareas = async (req, res) => {
  const id = req.params.id;
  const { tarea_id, titulo, prioridad_id, usuario_id, completado } = req.body;

  try {
    const resultado = await knex("tarea")
      .select("*")
      .where("tarea_id", id)
      .first();
    if (!resultado) {
      res.status(404).json({ error: "No existe una tarea con ese id" });
      return;
    }
    const update = {};
    if (tarea_id !== undefined) {
      update.tarea_id = tarea_id;
    }
    if (titulo !== undefined) {
      update.titulo = titulo;
    }
    if (prioridad_id !== undefined) {
      update.prioridad_id = prioridad_id;
    }
    if (usuario_id !== undefined) {
      update.usuario_id = usuario_id;
    }
    if (completado !== undefined) {
      update.completado = completado;
    }
    await knex("tarea").update(update);
    res.status(200).json("Se modifico correctamente la tarea");
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = { listaTareas, nuevaTareas, modificarTareas };
