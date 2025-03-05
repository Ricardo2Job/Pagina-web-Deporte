const mongoose = require('mongoose');

// Definir el esquema de "Prueba"
const pruebaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String },
  fechaCreacion: { type: Date, default: Date.now }
});

// Crear el modelo "Prueba" basado en el esquema
const Prueba = mongoose.model('Prueba', pruebaSchema);

module.exports = Prueba;
