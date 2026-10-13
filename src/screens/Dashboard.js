import { courseCard } from "../components/CourseCard";
import { bottomNavigation } from "../components/BottomNavigation";

export const dashboard = `
<section class="screen">

      <header class="app-header">

        <div class="brand">

          <div class="brand-icon">
            🎓
          </div>

          <div>
            <strong>Web Training</strong>
            <span>Empresarial</span>
          </div>

        </div>

        <button
          class="notification-button"
          data-screen="notificaciones"
        >
          🔔
          <span class="notification-badge">
            3
          </span>
        </button>

      </header>

      <main class="app-content">

        <section class="welcome-card">

          <div>

            <span class="small-text">
              Bienvenido
            </span>

            <h2 id="dashboardUser">
              Usuario
            </h2>

            <p>
              Continúa con tu proceso de capacitación.
            </p>

          </div>

          <div class="welcome-icon">
            👋
          </div>

        </section>

        <section>

          <div class="section-title">

            <h2>
              📈 Mi progreso
            </h2>

            <strong>
              75%
            </strong>

          </div>

          <div class="progress-container">

            <div
              class="progress-bar"
              style="width:75%"
            ></div>

          </div>

          <p class="progress-text">
            Has completado el 75% de tu capacitación.
          </p>

        </section>

        <section>

          <div class="section-title">

            <h2>
              📚 Mis cursos
            </h2>

            <button
              class="text-button"
              data-screen="cursos"
            >
              Ver todos
            </button>

          </div>

          <div class="course-grid">

            ${courseCard(
              "🔐",
              "Seguridad",
              "Seguridad de la información",
              "Curso sobre protección de información empresarial."
            )}

          </div>

        </section>

        <section>

          <h2>
            ⚡ Accesos rápidos
          </h2>

          <div class="quick-grid">

            <button data-screen="cursos">
              📚
              <span>Mis cursos</span>
            </button>

            <button data-screen="evaluaciones">
              📝
              <span>Evaluaciones</span>
            </button>

            <button data-screen="certificados">
              🏆
              <span>Certificados</span>
            </button>

            <button data-screen="perfil">
              👤
              <span>Mi perfil</span>
            </button>

          </div>

        </section>

      </main>

      ${bottomNavigation()}

    </section>
  `
