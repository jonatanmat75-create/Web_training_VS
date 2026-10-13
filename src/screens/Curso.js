import { pageHeader } from "../components/Header";
import { isAdmin } from "../utils/auth";

export const curso = `
<section class="screen">

      ${pageHeader("📖 Curso", isAdmin() ? "cursos" : "cursos")}

      <main class="page-content">

        <article class="course-detail">

          <div class="detail-icon">
            🔐
          </div>

          <h2>
            Seguridad de la información
          </h2>

          <p>
            Aprende los principales conceptos y buenas prácticas
            para proteger la información empresarial.
          </p>

          <div class="course-info">

            <div>
              ⏱️
              <strong>Duración</strong>
              <span>4 horas</span>
            </div>

            <div>
              📊
              <strong>Progreso</strong>
              <span>75%</span>
            </div>

          </div>

          <h3>
            📚 Contenido
          </h3>

          <div class="module">

            <span>01</span>

            <div>

              <strong>
                Introducción
              </strong>

              <small>
                ✅ Completado
              </small>

            </div>

          </div>

          <div class="module">

            <span>02</span>

            <div>

              <strong>
                Protección de información
              </strong>

              <small>
                ✅ Completado
              </small>

            </div>

          </div>

          <div class="module">

            <span>03</span>

            <div>

              <strong>
                Evaluación final
              </strong>

              <small>
                ⏳ Pendiente
              </small>

            </div>

          </div>

          <br>

          <button
            class="btn btn-primary btn-full"
            data-screen="evaluaciones"
          >
            📝 Presentar evaluación
          </button>

          ${
            isAdmin()
            ? `
              <br>

              <button
                class="btn btn-secondary btn-full"
                id="editCourse"
              >
                ✏️ Editar curso
              </button>
            `
            : ""
          }

        </article>

      </main>

    </section>
  `