const express = require("express");
const bodyParser = require("body-parser");
const holaRoutes = require("./routes/hola");
const task = require("./routes/task");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/api", holaRoutes);
app.use("/api", task);

app.get("/api/*", (req, res) => {
  res.status(404).json({
    error:
      "El recurso que quiere consumir no existe, revise los datos de la URL",
  });
});

app.listen(PORT, function () {
  console.log(`El servidor quedo corriendo en el puerto ${PORT}`);
});
