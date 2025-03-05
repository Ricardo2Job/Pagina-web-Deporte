import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import InicioSesion from "./Vista/InicioSesion";
import Registro from "./Vista/Registro";
import Inicio from "./Vista/Inicio";
import Rutinas from "./Vista/Rutinas";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/rutinas" element={<Rutinas />} />
      </Routes>
    </Router>
  );
}

export default App;