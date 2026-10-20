import CourseCard from "../components/CourseCard.jsx";
import BottomNavigation from "../components/BottomNavigation.jsx";

export default function Dashboard({
  usuario,
  onNavigate,
}) {
  const cursos = [
    {
      id: 1,
      titulo: "Seguridad de la información",
      categoria: "Seguridad",
      instructor: "Instructor Web Training",
      duracion: "20 horas",
      descripcion:
        "Curso sobre protección de información empresarial.",
      progreso: 75,
      icono: "🔐",
    },
    {
      id: 2,
      titulo: "React Básico",
      categoria: "Desarrollo",
      instructor: "Carlos Rodríguez",
      duracion: "40 horas",
      descripcion:
        "Aprende componentes, propiedades y estados en React.",
      progreso: 45,
      icono: "⚛️",
    },
    {
      id: 3,
      titulo: "Servicio al cliente",
      categoria: "Habilidades empresariales",
      instructor: "María Torres",
      duracion: "16 horas",
      descripcion:
        "Fortalece las habilidades de atención y servicio al cliente.",
      progreso: 20,
      icono: "🤝",
    },
  ];

  const nombreUsuario =
    usuario?.nombre || "Usuario";

  return (
    <section className="screen">
      <header className="app-header">
        <div className="brand">
          <div className="brand-icon">
            🎓
          </div>

          <div>
            <strong>Web Training</strong>
            <span>Empresarial</span>
          </div>
        </div>

        <button
          className="notification-button"
          type="button"
          aria-label="Abrir notificaciones"
          onClick={() =>
            onNavigate("notificaciones")
          }
        >
          🔔

          <span className="notification-badge">
            3
          </span>
        </button>
      </header>

      <main className="app-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Bienvenido
            </span>

            <h2>{nombreUsuario}</h2>

            <p>
              Continúa con tu proceso de capacitación.
            </p>
          </div>

          <div className="welcome-icon">
            👋
          </div>
        </section>

        <section>
          <div className="section-title">
            <h2>📈 Mi progreso</h2>
            <strong>75%</strong>
          </div>

          <div className="progress-container">
            <div
              className="progress-bar"
              style={{ width: "75%" }}
            />
          </div>

          <span className="progress-text">
            Has completado el 75% de tu capacitación.
          </span>
        </section>

        <section>
          <div className="section-title">
            <h2>📚 Mis cursos</h2>

            <button
              className="text-button"
              type="button"
              onClick={() =>
                onNavigate("cursos")
              }
            >
              Ver todos
            </button>
          </div>

          <div className="course-grid">
            {cursos.map((curso) => (
              <CourseCard
                key={curso.id}
                titulo={curso.titulo}
                categoria={curso.categoria}
                instructor={curso.instructor}
                duracion={curso.duracion}
                descripcion={curso.descripcion}
                progreso={curso.progreso}
                icono={curso.icono}
                onVerCurso={() =>
                  onNavigate("curso")
                }
              />
            ))}
          </div>
        </section>

        <section>
          <div className="section-title">
            <h2>⚡ Accesos rápidos</h2>
          </div>

          <div className="quick-grid">
            <button
              type="button"
              onClick={() =>
                onNavigate("evaluaciones")
              }
            >
              📝
              <span>Evaluaciones</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onNavigate("certificados")
              }
            >
              🏆
              <span>Certificados</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onNavigate("notificaciones")
              }
            >
              🔔
              <span>Notificaciones</span>
            </button>

            <button
              type="button"
              onClick={() =>
                onNavigate("perfil")
              }
            >
              👤
              <span>Perfil</span>
            </button>
          </div>
        </section>
      </main>

      <BottomNavigation
        pantallaActual="dashboard"
        onNavigate={onNavigate}
      />
    </section>
  );
}