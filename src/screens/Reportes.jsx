export default function Reportes({
  onNavigate,
  esAdmin,
}) {
  const estadisticas = [
    {
      icono: "👥",
      titulo: "Usuarios",
      valor: "3",
    },
    {
      icono: "📚",
      titulo: "Cursos",
      valor: "3",
    },
    {
      icono: "🏆",
      titulo: "Certificados",
      valor: "6",
    },
    {
      icono: "📝",
      titulo: "Evaluaciones",
      valor: "3",
    },
  ];

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          type="button"
          onClick={() =>
            onNavigate(esAdmin ? "admin" : "dashboard")
          }
        >
          ←
        </button>

        <h1>📊 Reportes</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Inteligencia de Negocio
            </span>

            <h2>Panel de Reportes</h2>

            <p>
              Consulte estadísticas generales,
              indicadores de aprendizaje y
              desempeño de la plataforma.
            </p>
          </div>

          <div className="welcome-icon">
            📈
          </div>
        </section>

        <section>
          <div className="quick-grid">
            {estadisticas.map((item, index) => (
              <button
                key={index}
                type="button"
              >
                {item.icono}

                <span>
                  {item.titulo}
                  <br />
                  {item.valor}
                </span>
              </button>
            ))}
          </div>
        </section>

        <section
          className="profile-card"
          style={{ marginTop: "25px" }}
        >
          <h2 style={{ marginBottom: "20px" }}>
            📋 Resumen General
          </h2>

          <div className="profile-row">
            <span>
              Usuarios Activos
            </span>

            <strong>3</strong>
          </div>

          <div className="profile-row">
            <span>
              Cursos Disponibles
            </span>

            <strong>6</strong>
          </div>

          <div className="profile-row">
            <span>
              Certificados Emitidos
            </span>

            <strong>3</strong>
          </div>

          <div className="profile-row">
            <span>
              Evaluaciones Completadas
            </span>

            <strong>12</strong>
          </div>

          <div className="profile-row">
            <span>
              Tasa de Finalización
            </span>

            <strong>92%</strong>
          </div>
        </section>

        <section
          className="profile-card"
          style={{ marginTop: "20px" }}
        >
          <h2 style={{ marginBottom: "15px" }}>
            📈 Indicadores
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <span>
              Progreso General de Cursos
            </span>

            <div
              className="progress-container"
              style={{ marginTop: "10px" }}
            >
              <div
                className="progress-bar"
                style={{ width: "85%" }}
              />
            </div>

            <small className="progress-text">
              85%
            </small>
          </div>

          <div>
            <span>
              Participación de Usuarios
            </span>

            <div
              className="progress-container"
              style={{ marginTop: "10px" }}
            >
              <div
                className="progress-bar"
                style={{ width: "92%" }}
              />
            </div>

            <small className="progress-text">
              92%
            </small>
          </div>
        </section>

        {esAdmin && (
          <div
            style={{
              textAlign: "right",
              marginTop: "25px",
            }}
          >
            <button
              className="btn btn-primary"
              type="button"
            >
              📄 Exportar Reporte
            </button>
          </div>
        )}
      </main>
    </section>
  );
}