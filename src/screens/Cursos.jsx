export default function Cursos({ onNavigate, esAdmin }) {
  const cursos = [
    {
      id: 1,
      nombre: "React Básico",
      categoria: "Frontend",
      descripcion: "Fundamentos de React y componentes.",
      progreso: 75,
      icono: "⚛️",
    },
    {
      id: 2,
      nombre: "JavaScript Moderno",
      categoria: "Programación",
      descripcion: "ES6+, funciones y consumo de APIs.",
      progreso: 60,
      icono: "📜",
    },
    {
      id: 3,
      nombre: "Bases de Datos SQL",
      categoria: "Base de Datos",
      descripcion: "Consultas, tablas y procedimientos.",
      progreso: 40,
      icono: "🗄️",
    },
  ];

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          onClick={() =>
            onNavigate(esAdmin ? "admin" : "dashboard")
          }
        >
          ←
        </button>

        <h1>📚 Cursos</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Catálogo Académico
            </span>

            <h2>Cursos Disponibles</h2>

            <p>
              Consulte y administre los cursos de la
              plataforma Web Training.
            </p>
          </div>

          <div className="welcome-icon">
            📚
          </div>
        </section>

        <section className="course-grid">
          {cursos.map((curso) => (
            <article
              key={curso.id}
              className="course-card"
            >
              <div className="course-image">
                {curso.icono}
              </div>

              <div className="course-body">
                <span className="course-category">
                  {curso.categoria}
                </span>

                <h3>{curso.nombre}</h3>

                <p>{curso.descripcion}</p>

                <div className="mini-progress">
                  <div
                    style={{
                      width: `${curso.progreso}%`,
                    }}
                  />
                </div>

                <small className="course-progress">
                  Progreso: {curso.progreso}%
                </small>

                <br />

                <button
                  className="btn btn-primary btn-small"
                  onClick={() =>
                    onNavigate("curso")
                  }
                >
                  Ver Curso
                </button>

                {esAdmin && (
                  <>
                    <button
                      className="btn btn-secondary btn-small"
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      ✏️ Editar
                    </button>

                    <button
                      className="btn btn-secondary btn-small"
                      style={{
                        marginLeft: "10px",
                      }}
                    >
                      🗑️ Eliminar
                    </button>
                  </>
                )}
              </div>
            </article>
          ))}
        </section>

        {esAdmin && (
          <div
            style={{
              marginTop: "25px",
              textAlign: "right",
            }}
          >
            <button className="btn btn-primary">
              ➕ Nuevo Curso
            </button>
          </div>
        )}
      </main>
    </section>
  );
}