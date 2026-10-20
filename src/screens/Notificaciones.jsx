export default function Notificaciones({
  onNavigate,
}) {
  const notificaciones = [
    {
      id: 1,
      icono: "📚",
      titulo: "Nuevo Curso Disponible",
      mensaje:
        "Se ha publicado el curso React Avanzado.",
    },
    {
      id: 2,
      icono: "🏆",
      titulo: "Certificado Emitido",
      mensaje:
        "Su certificado de JavaScript ya está disponible.",
    },
    {
      id: 3,
      icono: "📝",
      titulo: "Evaluación Pendiente",
      mensaje:
        "Tiene una evaluación pendiente por completar.",
    },
    {
      id: 4,
      icono: "👤",
      titulo: "Actualización de Perfil",
      mensaje:
        "Su perfil fue actualizado correctamente.",
    },
  ];

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

        <h1>🔔 Notificaciones</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Centro de Notificaciones
            </span>

            <h2>Notificaciones Recientes</h2>

            <p>
              Consulte novedades, evaluaciones,
              certificados y actualizaciones de la
              plataforma Web Training.
            </p>
          </div>

          <div className="welcome-icon">
            🔔
          </div>
        </section>

        <section style={{ marginTop: "25px" }}>
          {notificaciones.map((notificacion) => (
            <div
              key={notificacion.id}
              className="notification-card"
            >
              <span>
                {notificacion.icono}
              </span>

              <div>
                <strong>
                  {notificacion.titulo}
                </strong>

                <p>
                  {notificacion.mensaje}
                </p>
              </div>
            </div>
          ))}
        </section>

        <div
          style={{
            marginTop: "25px",
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <button
            className="btn btn-primary"
            type="button"
          >
            ✓ Marcar Todas Leídas
          </button>

          <button
            className="btn btn-secondary"
            type="button"
          >
            🗑️ Limpiar Notificaciones
          </button>
        </div>
      </main>
    </section>
  );
}