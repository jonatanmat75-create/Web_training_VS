export default function Configuracion({
  onNavigate,
  onLogout,
}) {
  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          type="button"
          onClick={() => onNavigate("admin")}
        >
          ←
        </button>

        <h1>⚙️ Configuración</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Administración del Sistema
            </span>

            <h2>Configuración General</h2>

            <p>
              Administre las preferencias, seguridad y
              opciones principales de la plataforma
              Web Training Empresarial.
            </p>
          </div>

          <div className="welcome-icon">
            ⚙️
          </div>
        </section>

        <section style={{ marginTop: "25px" }}>
          <button
            className="setting-item"
            type="button"
          >
            🔔
            <span>Notificaciones</span>
          </button>

          <button
            className="setting-item"
            type="button"
          >
            🔒
            <span>Seguridad y Contraseñas</span>
          </button>

          <button
            className="setting-item"
            type="button"
          >
            👤
            <span>Administración de Perfil</span>
          </button>

          <button
            className="setting-item"
            type="button"
          >
            🎨
            <span>Personalización de la Plataforma</span>
          </button>

          <button
            className="setting-item"
            type="button"
          >
            🌐
            <span>Idioma y Región</span>
          </button>

          <button
            className="setting-item"
            type="button"
          >
            💾
            <span>Copias de Seguridad</span>
          </button>

          <button
            className="setting-item"
            type="button"
          >
            📊
            <span>Preferencias de Reportes</span>
          </button>

          <button
            className="setting-item"
            type="button"
            onClick={() => onNavigate("perfil")}
          >
            👨‍💼
            <span>Mi Perfil</span>
          </button>

          <button
            className="setting-item danger"
            type="button"
            onClick={onLogout}
          >
            🚪
            <span>Cerrar Sesión</span>
          </button>
        </section>
      </main>
    </section>
  );
}