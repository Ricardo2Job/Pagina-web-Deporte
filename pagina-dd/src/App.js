import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import InicioSesion from "./Vista/InicioSesion";
import Registro from "./Vista/Registro";
import Inicio from "./Vista/Inicio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/inicio-sesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;