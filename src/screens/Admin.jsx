import BottomNavigation from "../components/BottomNavigation.jsx";

export default function Admin({
  usuario,
  onNavigate,
  onLogout,
}) {
  const nombreAdministrador =
    usuario?.nombre || "Administrador";

  const opciones = [
    {
      id: 1,
      icono: "👥",
      nombre: "Usuarios",
      pantalla: "usuarios",
    },
    {
      id: 2,
      icono: "📚",
      nombre: "Cursos",
      pantalla: "cursos",
    },
    {
      id: 3,
      icono: "📝",
      nombre: "Evaluaciones",
      pantalla: "evaluaciones",
    },
    {
      id: 4,
      icono: "🏆",
      nombre: "Certificados",
      pantalla: "certificados",
    },
    {
      id: 5,
      icono: "📊",
      nombre: "Reportes",
      pantalla: "reportes",
    },
    {
      id: 6,
      icono: "👤",
      nombre: "Perfil",
      pantalla: "perfil",
    },
    {
      id: 7,
      icono: "🔔",
      nombre: "Notificaciones",
      pantalla: "notificaciones",
    },
    {
      id: 8,
      icono: "⚙️",
      nombre: "Configuración",
      pantalla: "configuracion",
    },
  ];

  return (
    <section className="screen">
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">🎓</div>

          <div>
            <strong>Web Training</strong>
            <span>Panel administrativo</span>
          </div>
        </div>

        <button
          className="notification-button"
          type="button"
          aria-label="Abrir notificaciones"
          onClick={() => onNavigate("notificaciones")}
        >
          🔔
          <span className="notification-badge">4</span>
        </button>
      </header>

      <main className="app-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Panel administrativo
            </span>

            <h2>👨‍💼 {nombreAdministrador}</h2>

            <p>
              Administre los usuarios, cursos, evaluaciones,
              certificados y reportes de Web Training
              Empresarial.
            </p>
          </div>

          <div className="welcome-icon">🛠️</div>
        </section>

        <section>
          <div className="section-title">
            <h2>📊 Administración</h2>
            <strong>{opciones.length} opciones</strong>
          </div>

          <div className="quick-grid">
            {opciones.map((opcion) => (
              <button
                key={opcion.id}
                type="button"
                onClick={() => onNavigate(opcion.pantalla)}
              >
                {opcion.icono}
                <span>{opcion.nombre}</span>
              </button>
            ))}
          </div>
        </section>

        <section
          className="profile-card"
          style={{ marginTop: "28px" }}
        >
          <h2 style={{ marginBottom: "12px" }}>
            📋 Resumen de la plataforma
          </h2>

          <div className="profile-row">
            <span>Usuarios registrados</span>
            <strong>120</strong>
          </div>

          <div className="profile-row">
            <span>Cursos activos</span>
            <strong>15</strong>
          </div>

          <div className="profile-row">
            <span>Evaluaciones disponibles</span>
            <strong>12</strong>
          </div>

          <div className="profile-row">
            <span>Certificados emitidos</span>
            <strong>85</strong>
          </div>
        </section>

        <section
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "12px",
            marginTop: "25px",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-secondary"
            type="button"
            onClick={() => onNavigate("inicio")}
          >
            🏠 Ir al inicio
          </button>

          <button
            className="btn btn-primary"
            type="button"
            onClick={onLogout}
          >
            🚪 Cerrar sesión
          </button>
        </section>
      </main>

      <BottomNavigation
        pantallaActual="admin"
        onNavigate={onNavigate}
      />
    </section>
  );
}