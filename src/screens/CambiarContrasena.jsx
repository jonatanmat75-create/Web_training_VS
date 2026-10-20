import { useState } from "react";

export default function CambiarContrasena({
  usuario,
  onNavigate,
}) {
  const [formulario, setFormulario] = useState({
    passwordActual: "",
    nuevaPassword: "",
    confirmarPassword: "",
  });

  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("");
  const [guardando, setGuardando] = useState(false);

  const esAdministrador = usuario?.rol === "admin";

  const actualizarCampo = (evento) => {
    const { name, value } = evento.target;

    setFormulario((datosAnteriores) => ({
      ...datosAnteriores,
      [name]: value,
    }));

    setMensaje("");
    setTipoMensaje("");
  };

  const volverAlPerfil = () => {
    onNavigate("perfil");
  };

  const limpiarFormulario = () => {
    setFormulario({
      passwordActual: "",
      nuevaPassword: "",
      confirmarPassword: "",
    });
  };

  const guardarNuevaContrasena = (evento) => {
    evento.preventDefault();

    const passwordActual = formulario.passwordActual;
    const nuevaPassword = formulario.nuevaPassword;
    const confirmarPassword = formulario.confirmarPassword;

    setMensaje("");
    setTipoMensaje("");

    if (
      !passwordActual ||
      !nuevaPassword ||
      !confirmarPassword
    ) {
      setMensaje("Por favor, completa todos los campos.");
      setTipoMensaje("error");
      return;
    }

    if (nuevaPassword.length < 6) {
      setMensaje(
        "La nueva contraseña debe tener mínimo 6 caracteres."
      );
      setTipoMensaje("error");
      return;
    }

    if (nuevaPassword !== confirmarPassword) {
      setMensaje("Las contraseñas nuevas no coinciden.");
      setTipoMensaje("error");
      return;
    }

    if (passwordActual === nuevaPassword) {
      setMensaje(
        "La contraseña nueva debe ser diferente de la contraseña actual."
      );
      setTipoMensaje("error");
      return;
    }

    setGuardando(true);

    try {
      // Cambio de contraseña del administrador
      if (esAdministrador) {
        const passwordAdminGuardada =
          localStorage.getItem(
            "passwordAdministradorWebTraining"
          ) || "Admin123";

        if (passwordActual !== passwordAdminGuardada) {
          setMensaje(
            "La contraseña actual del administrador es incorrecta."
          );
          setTipoMensaje("error");
          return;
        }

        localStorage.setItem(
          "passwordAdministradorWebTraining",
          nuevaPassword
        );

        limpiarFormulario();

        setMensaje(
          "Contraseña del administrador actualizada correctamente."
        );
        setTipoMensaje("success");

        return;
      }

      // Cambio de contraseña de usuarios registrados
      const datosGuardados = localStorage.getItem(
        "usuariosWebTraining"
      );

      if (!datosGuardados) {
        setMensaje(
          "No se encontraron usuarios registrados."
        );
        setTipoMensaje("error");
        return;
      }

      const usuariosRegistrados =
        JSON.parse(datosGuardados);

      if (!Array.isArray(usuariosRegistrados)) {
        setMensaje(
          "No se pudieron leer los usuarios registrados."
        );
        setTipoMensaje("error");
        return;
      }

      const correoUsuario = usuario?.correo
        ?.trim()
        .toLowerCase();

      if (!correoUsuario) {
        setMensaje(
          "No se encontró el correo del usuario autenticado."
        );
        setTipoMensaje("error");
        return;
      }

      const indiceUsuario = usuariosRegistrados.findIndex(
        (usuarioRegistrado) =>
          usuarioRegistrado.correo
            ?.trim()
            .toLowerCase() === correoUsuario
      );

      if (indiceUsuario === -1) {
        setMensaje(
          "No se encontró la cuenta del usuario registrado."
        );
        setTipoMensaje("error");
        return;
      }

      const usuarioEncontrado =
        usuariosRegistrados[indiceUsuario];

      if (usuarioEncontrado.password !== passwordActual) {
        setMensaje(
          "La contraseña actual es incorrecta."
        );
        setTipoMensaje("error");
        return;
      }

      usuariosRegistrados[indiceUsuario] = {
        ...usuarioEncontrado,
        password: nuevaPassword,
      };

      localStorage.setItem(
        "usuariosWebTraining",
        JSON.stringify(usuariosRegistrados)
      );

      limpiarFormulario();

      setMensaje(
        "Contraseña actualizada correctamente. Ya puedes utilizarla en el próximo inicio de sesión."
      );
      setTipoMensaje("success");
    } catch (error) {
      console.error(
        "Error al cambiar la contraseña:",
        error
      );

      setMensaje(
        "Ocurrió un error al cambiar la contraseña."
      );
      setTipoMensaje("error");
    } finally {
      setGuardando(false);
    }
  };

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          type="button"
          aria-label="Volver al perfil"
          onClick={volverAlPerfil}
        >
          ←
        </button>

        <h1>🔒 Cambiar contraseña</h1>
      </header>

      <main className="form-container">
        <form
          className="form-card"
          onSubmit={guardarNuevaContrasena}
        >
          <div className="form-icon">🔒</div>

          <h2>Nueva contraseña</h2>

          <p className="form-description">
            Actualiza la contraseña.
          </p>

          {mensaje && (
            <div
              className={`form-message ${tipoMensaje}`}
              role="alert"
            >
              {mensaje}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="passwordActual">
              Contraseña actual
            </label>

            <input
              id="passwordActual"
              name="passwordActual"
              type="password"
              placeholder="Ingresa tu contraseña actual"
              value={formulario.passwordActual}
              onChange={actualizarCampo}
              autoComplete="current-password"
              disabled={guardando}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="nuevaPassword">
              Nueva contraseña
            </label>

            <input
              id="nuevaPassword"
              name="nuevaPassword"
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={formulario.nuevaPassword}
              onChange={actualizarCampo}
              autoComplete="new-password"
              minLength={6}
              disabled={guardando}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmarPassword">
              Confirmar nueva contraseña
            </label>

            <input
              id="confirmarPassword"
              name="confirmarPassword"
              type="password"
              placeholder="Repite la nueva contraseña"
              value={formulario.confirmarPassword}
              onChange={actualizarCampo}
              autoComplete="new-password"
              minLength={6}
              disabled={guardando}
              required
            />
          </div>

          <button
            className="btn btn-primary btn-full"
            type="submit"
            disabled={guardando}
          >
            {guardando
              ? "Guardando..."
              : "💾 Guardar contraseña"}
          </button>

          <button
            className="link-button"
            type="button"
            onClick={volverAlPerfil}
            disabled={guardando}
          >
            Cancelar
          </button>
        </form>
      </main>
    </section>
  );
}

