import React from "react";
import "./Styles/StyleInicioSesion.css";
import { Link } from "react-router-dom";

const InicioSesion = () => {
  return (
    <>
      <div className="fondo"></div> {/* El fondo se mantiene separado */}
      <div className="inicio-sesion-container">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <form>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Ingresar</button>
          </form>
          <p>
            ¿No tienes una cuenta? <Link to="/registro">Regístrate</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default InicioSesion;
