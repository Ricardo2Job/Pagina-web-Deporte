import React from "react";
import "./Styles/StyleRegistro.css";  // El archivo CSS para esta página
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <>
      <div className="fondo"></div> {/* El fondo se mantiene separado */}
      <div className="registro-container">
        <div className="register-box">
          <h2>Registrarse</h2>
          <form>
            <input type="NombreUsuario" placeholder="Nombre de usuario" required />
            <input type="text" placeholder="Nombre completo" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <input type="password" placeholder="Confirmar contraseña" required />
            <button type="submit">Registrarse</button>
          </form>
          <p>
            ¿Ya tienes una cuenta? <Link to="/inicio-sesion">Inicia sesión</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Registro;
