import { pageHeader } from "../components/Header";
import { isAdmin } from "../utils/auth";

export const configuracion = `
<section class="screen">

  ${pageHeader("⚙️ Configuración", isAdmin() ? "admin" : "dashboard")}

  <main class="page-content">

    <button class="setting-item">
      🎛️
      <span>Preferencias</span>
    </button>

    <button class="setting-item">
      🔒
      <span>Seguridad</span>
    </button>

    <button class="setting-item">
      🔑
      <span>Cambiar contraseña</span>
    </button>

    ${
      isAdmin()
      ? `
      <button class="setting-item">
        👨‍💼
        <span>Administración</span>
      </button>
      `
      : ""
    }

    <button
      class="setting-item danger"
      id="logout"
    >
      🚪
      <span>Cerrar sesión</span>
    </button>

  </main>

</section>
`;