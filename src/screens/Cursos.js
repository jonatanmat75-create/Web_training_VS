import { pageHeader } from "../components/Header";
import { courseCard } from "../components/CourseCard";
import { bottomNavigation } from "../components/BottomNavigation";
import { adminNavigation } from "../components/AdminNavigation";
import { isAdmin } from "../utils/auth";

export const cursos = `
<section class="screen">

      ${pageHeader("📚 Cursos", "admin")}

      <main class="page-content">

        <div class="search-box">

          🔎

          <input
            type="search"
            placeholder="Buscar curso..."
          >

        </div>

        <div class="course-grid">

          ${courseCard(
            "🔐",
            "Seguridad",
            "Seguridad de la información",
            "Curso sobre protección de información empresarial."
          )}

          ${courseCard(
            "💻",
            "Tecnología",
            "Herramientas digitales",
            "Uso eficiente de herramientas digitales."
          )}

          ${courseCard(
            "🛡️",
            "Cumplimiento",
            "Buenas prácticas empresariales",
            "Prácticas fundamentales del entorno laboral."
          )}

        </div>

        ${
          isAdmin()
          ? `
            <br>

            <button
              class="btn btn-primary btn-full"
              id="createCourse"
            >
              ➕ Crear curso
            </button>
          `
          : ""
        }

      </main>

      ${isAdmin() ? adminNavigation() : bottomNavigation()}

    </section>
  `