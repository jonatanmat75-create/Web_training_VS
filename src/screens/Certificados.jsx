export default function Certificados({
  onNavigate,
  esAdmin,
}) {
  const certificados = [
    {
      id: 1,
      curso: "React Básico",
      estudiante: "Juan Pérez",
      fecha: "15/10/2026",
    },
    {
      id: 2,
      curso: "JavaScript Moderno",
      estudiante: "María Gómez",
      fecha: "17/10/2026",
    },
    {
      id: 3,
      curso: "Bases de Datos SQL",
      estudiante: "Carlos Ramírez",
      fecha: "18/10/2026",
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

        <h1>🏆 Certificados</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Certificación Académica
            </span>

            <h2>Gestión de Certificados</h2>

            <p>
              Consulte, administre y descargue los
              certificados emitidos por la plataforma
              Web Training Empresarial.
            </p>
          </div>

          <div className="welcome-icon">
            🏆
          </div>
        </section>

        {certificados.map((certificado) => (
          <section
            key={certificado.id}
            className="certificate-card"
            style={{ marginTop: "20px" }}
          >
            <div className="certificate-icon">
              🏅
            </div>

            <div>
              <h2>{certificado.curso}</h2>

              <p>
                Estudiante:{" "}
                <strong>
                  {certificado.estudiante}
                </strong>

                <br />

                Fecha de emisión:{" "}
                <strong>
                  {certificado.fecha}
                </strong>
              </p>

              <button
                className="btn btn-primary btn-small"
                type="button"
              >
                📥 Descargar
              </button>

              <button
                className="btn btn-secondary btn-small"
                type="button"
              >
                👁️ Ver
              </button>

              {esAdmin && (
                <button
                  className="btn btn-secondary btn-small"
                  type="button"
                >
                  ✏️ Editar
                </button>
              )}
            </div>
          </section>
        ))}

        {esAdmin && (
          <div
            style={{
              marginTop: "25px",
              textAlign: "right",
            }}
          >
            <button
              className="btn btn-primary"
              type="button"
            >
              ➕ Nuevo Certificado
            </button>
          </div>
        )}
      </main>
    </section>
  );
}