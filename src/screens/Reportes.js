import { pageHeader } from "../components/Header";

export const reportes = `
<section class="screen">

  ${pageHeader("📊 Reportes", "admin")}

  <main class="page-content">

    <div class="quick-grid">

      <button>
        👥
        <span>Usuarios</span>
      </button>

      <button>
        📚
        <span>Cursos</span>
      </button>

      <button>
        📝
        <span>Evaluaciones</span>
      </button>

      <button>
        🏆
        <span>Certificados</span>
      </button>

    </div>

    <br>

    <article class="profile-card">

      <div class="profile-row">
        <span>👥 Usuarios registrados</span>
        <strong>1</strong>
      </div>

      <div class="profile-row">
        <span>📚 Cursos disponibles</span>
        <strong>3</strong>
      </div>

      <div class="profile-row">
        <span>📝 Evaluaciones</span>
        <strong>1</strong>
      </div>

      <div class="profile-row">
        <span>🏆 Certificados</span>
        <strong>1</strong>
      </div>

    </article>

  </main>

</section>
`;