import { useState } from "react";
import Inicio from "./screens/Inicio.jsx";
import Login from "./screens/Login.jsx";
import Registro from "./screens/Registro.jsx";

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");

  const navegar = (destino) => {
    setPantalla(destino);
  };

  if (pantalla === "login") {
    return <Login onNavigate={navegar} />;
  }

  if (pantalla === "registro") {
    return <Registro onNavigate={navegar} />;
  }

  return <Inicio onNavigate={navegar} />;
}
