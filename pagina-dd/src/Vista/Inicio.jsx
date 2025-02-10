import React from "react";
import "../Vista/Styles/StyleInicio.css";

const Inicio = () => {
  return (
    <div className="container">
      {/* Barra de navegación */}
      <nav className="navbar">
        <h1>Progreso Deportivo</h1>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Rutinas</a></li>
          <li><a href="#">Progreso</a></li>
          <li><a href="#">Perfil</a></li>
        </ul>
      </nav>

      {/* Sección de bienvenida */}
      <header className="hero">
        <h2>Bienvenido, Ricardo Dodds</h2>
        <p>Registra tu progreso y alcanza tus metas.</p>
        <button className="btn">Empezar</button>
      </header>

      {/* Sección de tarjetas */}
      <div className="grid-container">
        <div className="card">
          <h3>Tiempo en bicicleta</h3>
          <p>Registra cuánto tiempo tardas en llegar al gimnasio.</p>
        </div>
        <div className="card">
          <h3>Progreso de ejercicios</h3>
          <p>Monitorea el peso, repeticiones y series de cada ejercicio.</p>
        </div>
        <div className="card">
          <h3>Asistencia</h3>
          <p>Marca los días que asististe al gimnasio.</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Progreso Deportivo</p>
      </footer>
    </div>
  );
};

export default Inicio;
