export default function Perfil({
  usuario,
  onNavigate,
}) {
  const esAdministrador = usuario?.rol === "admin";

  const volver = () => {
    if (esAdministrador) {
      onNavigate("admin");
    } else {
      onNavigate("dashboard");
    }
  };

  const nombre =
    usuario?.nombre || "Usuario Web Training";

  const correo =
    usuario?.correo || "usuario@webtraining.com";

  const rol =
    usuario?.rol === "admin"
      ? "Administrador"
      : "Usuario";

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          type="button"
          aria-label="Volver"
          onClick={volver}
        >
          ←
        </button>

        <h1>👤 Perfil</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Información de la cuenta
            </span>

            <h2>Mi perfil</h2>

            <p>
              Consulta y administra la información de tu
              cuenta en Web Training Empresarial.
            </p>
          </div>

          <div className="welcome-icon">
            👤
          </div>
        </section>

        <section
          className="profile-header"
          style={{ marginTop: "30px" }}
        >
          <div className="avatar">
            {esAdministrador ? "👨‍💼" : "👤"}
          </div>

          <h2>{nombre}</h2>

          <p>{correo}</p>
        </section>

        <section className="profile-card">
          <div className="profile-row">
            <span>Nombre completo</span>
            <strong>{nombre}</strong>
          </div>

          <div className="profile-row">
            <span>Correo electrónico</span>
            <strong>{correo}</strong>
          </div>

          <div className="profile-row">
            <span>Rol</span>
            <strong>{rol}</strong>
          </div>

          <div className="profile-row">
            <span>Estado</span>
            <strong>
              {usuario?.estado || "Activo"}
            </strong>
          </div>

          <div className="profile-row">
            <span>Identificador</span>
            <strong>
              {usuario?.id || "Sin asignar"}
            </strong>
          </div>
        </section>

        <section
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => onNavigate("cambiarContrasena")}
          >
            🔒 Cambiar contraseña
          </button>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => onNavigate("notificaciones")}
          >
            🔔 Ver notificaciones
          </button>

          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => onNavigate("configuracion")}
          >
            ⚙️ Configuración
          </button>
        </section>
      </main>
    </section>
  );
}