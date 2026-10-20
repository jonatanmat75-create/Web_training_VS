import { useState } from "react";
import { useState } from "react";
import { solicitudApi } from "../services/api.js";

export default function Registro({ onNavigate }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    password: "",
    confirmarPassword: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));

    setMensaje("");
  };

  const registrarUsuario = (evento) => {
    evento.preventDefault();

    const nombre = formulario.nombre.trim();
    const correo = formulario.correo.trim().toLowerCase();
    const password = formulario.password;
    const confirmarPassword = formulario.confirmarPassword;

    if (!nombre || !correo || !password || !confirmarPassword) {
      setMensaje("Por favor, completa todos los campos.");
      setTipoMensaje("error");
      return;
    }

    if (!correo.includes("@") || !correo.includes(".")) {
      setMensaje("Ingresa un correo electrónico válido.");
      setTipoMensaje("error");
      return;
    }

    if (password.length < 6) {
      setMensaje(
        "La contraseña debe tener mínimo 6 caracteres."
      );
      setTipoMensaje("error");
      return;
    }

    if (password !== confirmarPassword) {
      setMensaje("Las contraseñas no coinciden.");
      setTipoMensaje("error");
      return;
    }

    const usuariosGuardados = JSON.parse(
      localStorage.getItem("usuariosWebTraining") || "[]"
    );

    const correoRegistrado = usuariosGuardados.some(
      (usuario) => usuario.correo === correo
    );

    if (correoRegistrado) {
      setMensaje(
        "Ya existe un usuario registrado con este correo."
      );
      setTipoMensaje("error");
      return;
    }

    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      correo,
      password,
      rol: "usuario",
      estado: "Activo",
      fechaRegistro: new Date().toISOString(),
    };

    const usuariosActualizados = [
      ...usuariosGuardados,
      nuevoUsuario,
    ];

    localStorage.setItem(
      "usuariosWebTraining",
      JSON.stringify(usuariosActualizados)
    );

    setMensaje(
      "Usuario registrado correctamente. Redirigiendo al inicio de sesión..."
    );
    setTipoMensaje("exito");

    setFormulario({
      nombre: "",
      correo: "",
      password: "",
      confirmarPassword: "",
    });

    setTimeout(() => {
      onNavigate("login");
    }, 1200);
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

        <h1>Crear cuenta</h1>
      </header>

      <main className="form-container">
        <form
          className="form-card"
          onSubmit={registrarUsuario}
        >
          <div className="form-icon">📝</div>

          <h2>Registro de usuario</h2>

          <p className="form-description">
            Crea una cuenta para acceder a los cursos,
            evaluaciones y certificados de Web Training.
          </p>

          {mensaje && (
            <div
              className={
                tipoMensaje === "exito"
                  ? "form-message success"           : "form-message error"
              }
              role="alert"
            >
              {mensaje}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>

            <input
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresa tu nombre completo"
              value={formulario.nombre}
              onChange={actualizarCampo}
              autoComplete="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo electrónico</label>

            <input
              id="correo"
              name="correo"
              type="email"
              placeholder="nombre@empresa.com"
              value={formulario.correo}
              onChange={actualizarCampo}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Contraseña</label>

            <input
              id="password"
              name="password"
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={formulario.password}
              onChange={actualizarCampo}
              autoComplete="new-password"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarPassword">
              Confirmar contraseña
            </label>

            <input
              id="confirmarPassword"
              name="confirmarPassword"
              type="password"
              placeholder="Repite tu contraseña"
              value={formulario.confirmarPassword}
              onChange={actualizarCampo}
              autoComplete="new-password"
            />
          </div>

          <button
            className="btn btn-primary btn-full"
            type="submit"
          >
            📝 Crear cuenta
          </button>

          <p className="register-text">
            ¿Ya tienes una cuenta?

            <button
              className="inline-link"
              type="button"
              onClick={() => onNavigate("login")}
            >
              Iniciar sesión
            </button>
          </p>
        </form>
      </main>
    </section>
  );
}