import { useState } from "react";

import Inicio from "./screens/Inicio.jsx";
import Login from "./screens/Login.jsx";
import Registro from "./screens/Registro.jsx";
import Admin from "./screens/Admin.jsx";
import Dashboard from "./screens/Dashboard.jsx";
import Certificados from "./screens/Certificados.jsx";
import Configuracion from "./screens/Configuracion.jsx";
import Curso from "./screens/Curso.jsx";
import Cursos from "./screens/Cursos.jsx";
import Usuarios from "./screens/Usuarios.jsx";
import Notificaciones from "./screens/Notificaciones.jsx";
import Perfil from "./screens/Perfil.jsx";
import Recuperar from "./screens/Recuperar.jsx";
import Reportes from "./screens/Reportes.jsx";
import Evaluaciones from "./screens/Evaluaciones.jsx";
import CambiarContrasena from "./screens/CambiarContrasena.jsx";

export default function App() {
  const [pantalla, setPantalla] = useState("inicio");
  const [usuario, setUsuario] = useState(null);

  const navegar = (destino) => {
    setPantalla(destino);
    window.scrollTo(0, 0);
  };

  const iniciarSesion = (usuarioAutenticado) => {
    setUsuario(usuarioAutenticado);

    if (usuarioAutenticado.rol === "admin") {
      navegar("admin");
    } else {
      navegar("dashboard");
    }
  };

  const cerrarSesion = () => {
    setUsuario(null);
    navegar("inicio");
  };

  const mostrarLogin = () => (
    <Login
      onNavigate={navegar}
      onLogin={iniciarSesion}
    />
  );

  switch (pantalla) {
    case "login":
      return (
        <Login
          onNavigate={navegar}
          onLogin={iniciarSesion}
        />
      );

    case "registro":
      return <Registro onNavigate={navegar} />;

    case "recuperar":
      return <Recuperar onNavigate={navegar} />;

    case "dashboard":
      if (!usuario) return mostrarLogin();

      return (
        <Dashboard
          usuario={usuario}
          onNavigate={navegar}
        />
      );

    case "admin":
      if (usuario?.rol !== "admin") {
        return mostrarLogin();
      }

      return (
        <Admin
          usuario={usuario}
          onNavigate={navegar}
          onLogout={cerrarSesion}
        />
      );

    case "usuarios":
      if (usuario?.rol !== "admin") {
        return mostrarLogin();
      }

      return <Usuarios onNavigate={navegar} />;

    case "cursos":
      if (!usuario) return mostrarLogin();

      return (
        <Cursos
          esAdmin={usuario?.rol === "admin"}
          onNavigate={navegar}
        />
      );

    case "curso":
      if (!usuario) return mostrarLogin();

      return (
        <Curso
          esAdmin={usuario?.rol === "admin"}
          onNavigate={navegar}
        />
      );

    case "evaluaciones":
      if (!usuario) return mostrarLogin();

      return (
        <Evaluaciones
          esAdmin={usuario?.rol === "admin"}
          onNavigate={navegar}
        />
      );

    case "certificados":
      if (!usuario) return mostrarLogin();

      return (
        <Certificados
          esAdmin={usuario?.rol === "admin"}
          onNavigate={navegar}
        />
      );

    case "reportes":
      if (!usuario) return mostrarLogin();

      return (
        <Reportes
          esAdmin={usuario?.rol === "admin"}
          onNavigate={navegar}
        />
      );

    case "perfil":
      if (!usuario) return mostrarLogin();

      return (
        <Perfil
          usuario={usuario}
          onNavigate={navegar}
        />
      );

    case "cambiarContrasena":
      if (!usuario) return mostrarLogin();

      return (
        <CambiarContrasena
          usuario={usuario}
          onNavigate={navegar}
        />
      );

    case "notificaciones":
      if (!usuario) return mostrarLogin();

      return (
        <Notificaciones
          esAdmin={usuario?.rol === "admin"}
          onNavigate={navegar}
        />
      );

    case "configuracion":
      if (!usuario) return mostrarLogin();

      return (
        <Configuracion
          esAdmin={usuario?.rol === "admin"}
          onNavigate={navegar}
          onLogout={cerrarSesion}
        />
      );

    case "inicio":
    default:
      return <Inicio onNavigate={navegar} />;
  }
}