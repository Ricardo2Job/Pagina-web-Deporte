const express = require('express');
const mongoose = require('mongoose');
const pruebaRoutes = require('./routes/pruebaRoutes.js');
const app = express();

mongoose.connect('mongodb://localhost/miBaseDeDatos', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(err));

app.use(express.json());
app.use('/api/pruebas', pruebaRoutes);

app.listen(5000, () => {
  console.log("Servidor corriendo en el puerto 5000");
});
