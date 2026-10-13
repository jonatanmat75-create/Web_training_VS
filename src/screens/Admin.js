import { adminNavigation } from "../components/AdminNavigation";

export const admin = `
<section class="screen">

  <header class="app-header">

    <div class="brand">

      <div class="brand-icon">
        👨‍💼
      </div>

      <div>
        <strong>Web Training</strong>
        <span>Administrador</span>
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
          Panel administrativo
        </span>

        <h2>
          👨‍💼 Administrador
        </h2>

        <p>
          Tiene acceso completo a Web Training Empresarial.
        </p>

      </div>

      <div class="welcome-icon">
        🛠️
      </div>

    </section>

    <section>

      <h2>
        📊 Administración
      </h2>

      <div class="quick-grid">

        <button data-screen="usuarios">
          👥
          <span>Usuarios</span>
        </button>

        <button data-screen="cursos">
          📚
          <span>Cursos</span>
        </button>

        <button data-screen="evaluaciones">
          📝
          <span>Evaluaciones</span>
        </button>

        <button data-screen="certificados">
          🏆
          <span>Certificados</span>
        </button>

        <button data-screen="reportes">
          📊
          <span>Reportes</span>
        </button>

        <button data-screen="perfil">
          👤
          <span>Perfil</span>
        </button>

        <button data-screen="notificaciones">
          🔔
          <span>Notificaciones</span>
        </button>

        <button data-screen="configuracion">
          ⚙️
          <span>Configuración</span>
        </button>

      </div>

    </section>

    <section>

      <h2>
        ⚡ Acceso rápido
      </h2>

      <div class="quick-grid">

        <button data-screen="curso">
          📖
          <span>Detalle de curso</span>
        </button>

        <button data-screen="usuarios">
          👥
          <span>Gestionar usuarios</span>
        </button>

        <button data-screen="certificados">
          🏆
          <span>Gestionar certificados</span>
        </button>

        <button data-screen="reportes">
          📈
          <span>Ver reportes</span>
        </button>

      </div>

    </section>

  </main>

  ${adminNavigation()}

</section>
`;