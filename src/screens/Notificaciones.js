import { pageHeader } from "../components/Header";
import { notification } from "../components/Notification";
import { isAdmin } from "../utils/auth";

export const notificaciones = `
<section class="screen">

      ${pageHeader("🔔 Notificaciones", isAdmin() ? "admin" : "dashboard")}

      <main class="page-content">

        ${notification(
          "📚",
          "Nuevo curso disponible",
          "Se ha asignado una nueva capacitación."
        )}

        ${notification(
          "📝",
          "Evaluación pendiente",
          "Tienes una evaluación pendiente."
        )}

        ${notification(
          "🏆",
          "Certificado disponible",
          "Tu certificado ya está disponible."
        )}

      </main>

    </section>
  `