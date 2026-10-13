import { pageHeader } from "../components/Header";
import { bottomNavigation } from "../components/BottomNavigation";
import { adminNavigation } from "../components/AdminNavigation";
import { isAdmin } from "../utils/auth";

export const certificados = `
<section class="screen">

      ${pageHeader("🏆 Certificados", isAdmin() ? "admin" : "dashboard")}

      <main class="page-content">

        <article class="certificate-card">

          <div class="certificate-icon">
            🏆
          </div>

          <div>

            <span>
              Certificado obtenido
            </span>

            <h2>
              Inducción empresarial
            </h2>

            <p>
              Finalizado: 15/08/2026
            </p>

            <button
              class="btn btn-primary"
              id="viewCertificate"
              type="button"
            >
              👁️ Ver certificado
            </button>

            <button
              class="btn btn-secondary"
              id="downloadCertificate"
              type="button"
            >
              ⬇️ Descargar
            </button>

          </div>

        </article>

        ${
          isAdmin()
          ? `
            <br>

            <button
              class="btn btn-primary btn-full"
              id="createCertificate"
              type="button"
            >
              ➕ Generar certificado
            </button>
          `
          : ""
        }

      </main>

      ${isAdmin() ? adminNavigation() : bottomNavigation()}

    </section>
  `;
