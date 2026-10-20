import { useState } from "react";
import { solicitudApi } from "../services/api.js";

export default function Login({
  onNavigate,
  onLogin,
}) {
  const [formulario, setFormulario] = useState({
    correo: "",
    password: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));

    setMensaje("");
  };

  const iniciarSesion = (evento) => {
    evento.preventDefault();

    const correo = formulario.correo
      .trim()
      .toLowerCase();

    const password = formulario.password;

    if (!correo || !password) {
      setMensaje(
        "Por favor, ingresa el correo y la contraseña."
      );
      return;
    }

    setCargando(true);
    setMensaje("");

    try {
      /*
       * Obtiene la contraseña actual del administrador.
       * Si todavía no ha sido cambiada, utiliza Admin123.
       */
      const passwordAdministrador =
        localStorage.getItem(
          "passwordAdministradorWebTraining"
        ) || "Admin123";

      const administrador = {
        id: 1,
        nombre: "Administrador",
        correo: "admin@webtraining.com",
        password: passwordAdministrador,
        rol: "admin",
        estado: "Activo",
      };

      /*
       * Validación del acceso del administrador.
       */
      const esAdministrador =
        correo === administrador.correo &&
        password === administrador.password;

      if (esAdministrador) {
        const administradorAutenticado = {
          id: administrador.id,
          nombre: administrador.nombre,
          correo: administrador.correo,
          rol: administrador.rol,
          estado: administrador.estado,
        };

        if (typeof onLogin === "function") {
          onLogin(administradorAutenticado);
        }

        return;
      }

      /*
       * Lee los usuarios creados desde Registro.jsx.
       */
      const datosGuardados = localStorage.getItem(
        "usuariosWebTraining"
      );

      let usuariosRegistrados = [];

      if (datosGuardados) {
        const datosConvertidos = JSON.parse(datosGuardados);

        if (Array.isArray(datosConvertidos)) {
          usuariosRegistrados = datosConvertidos;
        }
      }

      /*
       * Busca un usuario cuyo correo y contraseña coincidan.
       */
      const usuarioEncontrado =
        usuariosRegistrados.find(
          (usuarioRegistrado) =>
            usuarioRegistrado.correo
              ?.trim()
              .toLowerCase() === correo &&
            usuarioRegistrado.password === password
        );

      if (!usuarioEncontrado) {
        setMensaje(
          "El correo o la contraseña son incorrectos."
        );
        return;
      }

      if (
        usuarioEncontrado.estado
          ?.trim()
          .toLowerCase() === "inactivo"
      ) {
        setMensaje(
          "La cuenta está inactiva. Comunícate con el administrador."
        );
        return;
      }

      /*
       * Envía los datos del usuario a App.jsx,
       * sin incluir la contraseña.
       */
      const usuarioAutenticado = {
        id: usuarioEncontrado.id,
        nombre: usuarioEncontrado.nombre,
        correo: usuarioEncontrado.correo,
        rol: usuarioEncontrado.rol || "usuario",
        estado: usuarioEncontrado.estado || "Activo",
        fechaRegistro: usuarioEncontrado.fechaRegistro,
      };

      if (typeof onLogin === "function") {
        onLogin(usuarioAutenticado);
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);

      setMensaje(
        "No fue posible iniciar sesión. Verifica los datos guardados."
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          type="button"
          aria-label="Volver al inicio"
          onClick={() => onNavigate("inicio")}
        >
          ←
        </button>

        <h1>Iniciar sesión</h1>
      </header>

      <main className="form-container">
        <form
          className="form-card"
          onSubmit={iniciarSesion}
        >
          <div className="form-icon">🔐</div>

          <h2>Bienvenido</h2>

          <p className="form-description">
            Ingresa tus datos para acceder a Web Training
            Empresarial.
          </p>

          {mensaje && (
            <div
              className="form-message error"
              role="alert"
            >
              {mensaje}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="correo">
              Correo electrónico
            </label>

            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="nombre@empresa.com"
              value={formulario.correo}
              onChange={actualizarCampo}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">
              Contraseña
            </label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Ingresa tu contraseña"
              value={formulario.password}
              onChange={actualizarCampo}
              autoComplete="current-password"
              required
            />
          </div>

          <button
            className="text-button"
            type="button"
            onClick={() => onNavigate("recuperar")}
          >
            ¿Olvidaste tu contraseña?
          </button>

          <button
            className="btn btn-primary btn-full"
            type="submit"
            disabled={cargando}
          >
            {cargando
              ? "Ingresando..."
              : "🔐 Iniciar sesión"}
          </button>

          <p className="register-text">
            ¿No tienes una cuenta?

            <button
              className="inline-link"
              type="button"
              onClick={() => onNavigate("registro")}
            >
              Crear cuenta
            </button>
          </p>

          <div className="login-demo">
            <strong>
              Acceso administrativo inicial
            </strong>

            <span>
              Correo: admin@webtraining.com
            </span>

            <span>
              Contraseña inicial: Admin123
            </span>

            <small>
              Si cambiaste la contraseña del administrador,
              debes utilizar la nueva.
            </small>
          </div>
        </form>
      </main>
    </section>
  );
}

