const express = require('express');
const router = express.Router();
const pruebaController = require('./controllers/pruebaController');  // Comprobar si './' funciona


// Ruta GET para obtener todas las pruebas
router.get('/', pruebaController.getAllPruebas);

// Ruta POST para crear una nueva prueba
router.post('/', pruebaController.createPrueba);

module.exports = router;
