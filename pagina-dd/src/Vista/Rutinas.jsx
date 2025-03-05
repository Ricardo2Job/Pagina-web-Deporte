import React, { useState } from "react";
import "../Vista/Styles/StyleRutinas.css";

// Datos de ejemplo para los ejercicios (simulando la base de datos)
const ejerciciosDB = [
  { id: 1, nombre: "Curl de Bíceps", musculo: "Bíceps", imagen: "ruta/curl_biceps.png" },
  { id: 2, nombre: "Curl Martillo", musculo: "Bíceps", imagen: "ruta/curl_martillo.png" },
  { id: 3, nombre: "Polea Alta", musculo: "Tríceps", imagen: "ruta/polea_alta.png" },
  { id: 4, nombre: "Press de Banca", musculo: "Pectorales", imagen: "ruta/press_banca.png" }
];

const Rutinas = () => {
  const [nombreRutina, setNombreRutina] = useState("Rutina Día Lunes");
  const [rutina, setRutina] = useState([]);
  const [grupoMuscular, setGrupoMuscular] = useState("");

  // Obtener los ejercicios filtrados por músculo
  const ejerciciosFiltrados = ejerciciosDB.filter(
    (ej) => grupoMuscular === "" || ej.musculo === grupoMuscular
  );

  // Agregar ejercicio a la rutina
  const agregarEjercicio = (ejercicio) => {
    setRutina([...rutina, { ...ejercicio, series: 4 }]);
  };

  // Eliminar ejercicio de la rutina
  const eliminarEjercicio = (id) => {
    setRutina(rutina.filter((ej) => ej.id !== id));
  };

  return (
    <div className="rutinas-container">
      <h2>{nombreRutina} <button onClick={() => setNombreRutina(prompt("Nuevo nombre de rutina:", nombreRutina))}>✏️</button></h2>
      
      {/* Selección de grupo muscular */}
      <select onChange={(e) => setGrupoMuscular(e.target.value)}>
        <option value="">Todos</option>
        <option value="Bíceps">Bíceps</option>
        <option value="Tríceps">Tríceps</option>
        <option value="Pectorales">Pectorales</option>
      </select>

      {/* Lista de ejercicios disponibles */}
      <div className="ejercicios-disponibles">
        {ejerciciosFiltrados.map((ej) => (
          <div key={ej.id} className="ejercicio-card">
            <img src={ej.imagen} alt={ej.nombre} />
            <p>{ej.nombre}</p>
            <button onClick={() => agregarEjercicio(ej)}>Agregar</button>
          </div>
        ))}
      </div>

      {/* Lista de ejercicios en la rutina */}
      <div className="rutina-list">
        {rutina.map((ej, index) => (
          <div key={index} className="rutina-ejercicio">
            <img src={ej.imagen} alt={ej.nombre} />
            <p>{ej.nombre} x{ej.series}</p>
            <button onClick={() => eliminarEjercicio(ej.id)}>❌</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rutinas;
