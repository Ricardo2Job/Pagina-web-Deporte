// controllers/pruebaController.js

const prueba = require('./models/prueba');

// Ejemplo de función para obtener todas las pruebas
exports.getAllPruebas = async (req, res) => {
  try {
    const pruebas = await prueba.find(); // Suponiendo que "prueba" es tu modelo
    res.json(pruebas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Ejemplo de función para crear una nueva prueba
exports.createPrueba = async (req, res) => {
  const nuevaPrueba = new prueba({
    // Definir los datos que se van a guardar
  });

  try {
    const savedPrueba = await nuevaPrueba.save();
    res.status(201).json(savedPrueba);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
