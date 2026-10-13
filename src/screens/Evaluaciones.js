import { pageHeader } from "../components/Header";
import { bottomNavigation } from "../components/BottomNavigation";
import { adminNavigation } from "../components/AdminNavigation";
import { isAdmin } from "../utils/auth";

export const evaluaciones = `
<section class="screen">

      ${pageHeader("📝 Evaluaciones", isAdmin() ? "admin" : "dashboard")}

      <main class="page-content">

        <article class="evaluation-card">

          <div class="evaluation-icon">
            📝
          </div>

          <div>

            <span>
              Evaluación pendiente
            </span>

            <h2>
              Seguridad de la información
            </h2>

            <p>
              10 preguntas · 15 minutos
            </p>

            <button
              class="btn btn-primary"
              id="startEvaluation"
            >
              ✏️ Presentar evaluación
            </button>

          </div>

        </article>

        ${
          isAdmin()
          ? `
            <br>

            <button
              class="btn btn-secondary btn-full"
              id="createEvaluation"
            >
              ➕ Crear evaluación
            </button>
          `
          : ""
        }

      </main>

      ${isAdmin() ? adminNavigation() : bottomNavigation()}

    </section>
  `;