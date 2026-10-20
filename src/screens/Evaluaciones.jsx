export default function Evaluaciones({ onNavigate }) {
  const evaluaciones = [
    {
      id: 1,
      nombre: "Evaluación React Básico",
      curso: "React",
      preguntas: 20,
    },
    {
      id: 2,
      nombre: "Evaluación JavaScript",
      curso: "JavaScript",
      preguntas: 15,
    },
    {
      id: 3,
      nombre: "Evaluación SQL",
      curso: "Bases de Datos",
      preguntas: 25,
    },
  ];

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          type="button"
          className="back-button"
          onClick={() => onNavigate("admin")}
        >
          ←
        </button>

        <h1>📝 Evaluaciones</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Gestión Académica
            </span>

            <h2>Administración de Evaluaciones</h2>

            <p>
              Administre las evaluaciones de los cursos
              disponibles en Web Training.
            </p>
          </div>

          <div className="welcome-icon">
            📝
          </div>
        </section>

        {evaluaciones.map((evaluacion) => (
          <section
            key={evaluacion.id}
            className="evaluation-card"
            style={{ marginTop: "20px" }}
          >
            <div className="evaluation-icon">
              📋
            </div>

            <div>
              <h2>{evaluacion.nombre}</h2>

              <p>
                Curso: {evaluacion.curso}
                <br />
                Preguntas: {evaluacion.preguntas}
              </p>

              <button
                className="btn btn-primary btn-small"
                type="button"
              >
                ✏️ Editar
              </button>

              <button
                className="btn btn-secondary btn-small"
                type="button"
                style={{ marginLeft: "10px" }}
              >
                🗑️ Eliminar
              </button>
            </div>
          </section>
        ))}

        <div style={{ marginTop: "20px" }}>
          <button
            className="btn btn-primary"
            type="button"
          >
            ➕ Nueva Evaluación
          </button>
        </div>
      </main>
    </section>
  );
}