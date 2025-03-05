// db.js

const mongoose = require('mongoose');

const uri = "mongodb+srv://ricardo2dds:1234@ggg.cndte.mongodb.net/GGG?retryWrites=true&w=majority&appName=GGG";

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, clientOptions);
    console.log("Conexión exitosa a la base de datos MongoDB!");
  } catch (error) {
    console.error("Error al conectar con la base de datos:", error);
    process.exit(1);  // Salir si no se puede conectar
  }
}

async function disconnectFromDatabase() {
  try {
    await mongoose.disconnect();
    console.log("Desconectado de la base de datos.");
  } catch (error) {
    console.error("Error al desconectar:", error);
  }
}

module.exports = { connectToDatabase, disconnectFromDatabase };
