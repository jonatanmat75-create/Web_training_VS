export default function Curso({
  onNavigate,
  esAdmin,
}) {
  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          onClick={() => onNavigate("cursos")}
        >
          ←
        </button>

        <h1>📖 Detalle del Curso</h1>
      </header>

      <main className="page-content">
        <section className="course-detail">
          <div className="detail-icon">
            ⚛️
          </div>

          <h2>React Básico</h2>

          <p>
            Aprenda los fundamentos de React,
            componentes, props, estados y navegación.
          </p>

          <div className="course-info">
            <div>
              <strong>Instructor</strong>
              <span>Carlos Rodríguez</span>
            </div>

            <div>
              <strong>Duración</strong>
              <span>40 Horas</span>
            </div>

            <div>
              <strong>Nivel</strong>
              <span>Básico</span>
            </div>

            <div>
              <strong>Estado</strong>
              <span>Activo</span>
            </div>
          </div>

          <h3>Módulos</h3>

          <div className="module">
            <span>1</span>

            <div>
              <strong>Introducción a React</strong>
              <small>Conceptos básicos</small>
            </div>
          </div>

          <div className="module">
            <span>2</span>

            <div>
              <strong>Componentes</strong>
              <small>Creación y reutilización</small>
            </div>
          </div>

          <div className="module">
            <span>3</span>

            <div>
              <strong>Estados y Props</strong>
              <small>Interactividad</small>
            </div>
          </div>

          <div className="module">
            <span>4</span>

            <div>
              <strong>Proyecto Final</strong>
              <small>Aplicación práctica</small>
            </div>
          </div>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
            }}
          >
            <button className="btn btn-primary">
              ▶️ Continuar Curso
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
                onNavigate("evaluaciones")
              }
            >
              📝 Evaluación
            </button>

            <button
              className="btn btn-secondary"
              onClick={() =>
                onNavigate("certificados")
              }
            >
              🏆 Certificado
            </button>

            {esAdmin && (
              <button className="btn btn-secondary">
                ✏️ Editar Curso
              </button>
            )}
          </div>
        </section>
      </main>
    </section>
  );
}