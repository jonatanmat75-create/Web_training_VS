import "./styles.css";

const app = document.querySelector("#app");

console.log("WEB TRAINING CARGADO");
console.log("APP:", app);

/* =========================================================
   CONFIGURACIÓN DEL ADMINISTRADOR
   ========================================================= */

const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "Admin123*";

/* =========================================================
   UTILIDADES
   ========================================================= */

function getCurrentUser() {
  const saved = localStorage.getItem("webTrainingUser");

  if (!saved) {
    return null;
  }

  try {
    return JSON.parse(saved);
  } catch (error) {
    localStorage.removeItem("webTrainingUser");
    return null;
  }
}

function isAdmin() {
  const user = getCurrentUser();

  return (
    user &&
    user.role === "admin"
  );
}

function saveUser(user) {
  localStorage.setItem(
    "webTrainingUser",
    JSON.stringify(user)
  );
}

/* =========================================================
   PANTALLAS
   ========================================================= */

const screens = {

  /* =======================================================
     INICIO
     ======================================================= */

  inicio: `
    <section class="screen">

      <div class="public-header">

        <div class="brand">

          <div class="brand-icon">
            🎓
          </div>

          <div>
            <h1>Web Training</h1>
            <span>Empresarial</span>
          </div>

        </div>

      </div>

      <main class="hero">

        <div class="hero-content">

          <div class="hero-icon">
            🎓
          </div>

          <h2>
            Capacitación empresarial
          </h2>

          <p>
            Aprende, evalúa tus conocimientos,
            consulta tu progreso y obtén tus certificados.
          </p>

          <div class="hero-actions">

            <button
              class="btn btn-primary"
              data-screen="login"
            >
              🔐 Iniciar sesión
            </button>

            <button
              class="btn btn-secondary"
              data-screen="registro"
            >
              📝 Crear cuenta
            </button>

          </div>

        </div>

      </main>

    </section>
  `,

  /* =======================================================
     LOGIN
     ======================================================= */

  login: `
    <section class="screen">

      <header class="simple-header">

        <button
          class="back-button"
          data-screen="inicio"
        >
          ←
        </button>

        <h1>Iniciar sesión</h1>

      </header>

      <main class="form-container">

        <div class="form-card">

          <div class="form-icon">
            🔐
          </div>

          <h2>Bienvenido</h2>

          <p class="form-description">
            Ingresa tus datos para acceder a Web Training.
          </p>

          <form id="loginForm">

            <div class="form-group">

              <label>
                Usuario o correo electrónico
              </label>

              <input
                id="loginUser"
                type="text"
                placeholder="Usuario o correo"
                required
              >

            </div>

            <div class="form-group">

              <label>
                Contraseña
              </label>

              <input
                id="loginPassword"
                type="password"
                placeholder="Ingrese su contraseña"
                required
              >

            </div>

            <button
              class="btn btn-primary btn-full"
              type="submit"
            >
              🔐 Ingresar
            </button>

          </form>

          <button
            class="link-button"
            data-screen="recuperar"
          >
            🔄 ¿Olvidó su contraseña?
          </button>

          <p class="register-text">

            ¿No tiene una cuenta?

            <button
              class="inline-link"
              data-screen="registro"
            >
              Registrarse
            </button>

          </p>

        </div>

      </main>

    </section>
  `,

  /* =======================================================
     REGISTRO
     ======================================================= */

  registro: `
    <section class="screen">

      <header class="simple-header">

        <button
          class="back-button"
          data-screen="inicio"
        >
          ←
        </button>

        <h1>Crear cuenta</h1>

      </header>

      <main class="form-container">

        <div class="form-card">

          <div class="form-icon">
            📝
          </div>

          <h2>Registro</h2>

          <p class="form-description">
            Complete la información para crear su cuenta.
          </p>

          <form id="registerForm">

            <div class="form-group">

              <label>
                Nombre completo
              </label>

              <input
                id="registerName"
                type="text"
                placeholder="Nombre completo"
                required
              >

            </div>

            <div class="form-group">

              <label>
                Documento
              </label>

              <input
                id="registerDocument"
                type="text"
                inputmode="numeric"
                placeholder="Número de documento"
                required
              >

            </div>

            <div class="form-group">

              <label>
                Correo electrónico
              </label>

              <input
                id="registerEmail"
                type="email"
                placeholder="correo@empresa.com"
                required
              >

            </div>

            <div class="form-group">

              <label>
                Contraseña
              </label>

              <input
                id="registerPassword"
                type="password"
                placeholder="Crear contraseña"
                required
              >

            </div>

            <button
              class="btn btn-primary btn-full"
              type="submit"
            >
              ✅ Crear cuenta
            </button>

          </form>

        </div>

      </main>

    </section>
  `,

  /* =======================================================
     RECUPERAR
     ======================================================= */

  recuperar: `
    <section class="screen">

      <header class="simple-header">

        <button
          class="back-button"
          data-screen="login"
        >
          ←
        </button>

        <h1>Recuperar contraseña</h1>

      </header>

      <main class="form-container">

        <div class="form-card">

          <div class="form-icon">
            🔄
          </div>

          <h2>Recuperar acceso</h2>

          <p class="form-description">
            Ingresa tu correo para recuperar el acceso.
          </p>

          <form id="recoverForm">

            <div class="form-group">

              <label>
                Correo electrónico
              </label>

              <input
                id="recoverEmail"
                type="email"
                placeholder="correo@empresa.com"
                required
              >

            </div>

            <button
              class="btn btn-primary btn-full"
              type="submit"
            >
              📧 Enviar instrucciones
            </button>

          </form>

        </div>

      </main>

    </section>
  `,

  /* =======================================================
     DASHBOARD USUARIO
     ======================================================= */

  dashboard: `
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
  `,

  /* =======================================================
     PANEL ADMINISTRADOR
     ======================================================= */

  admin: `
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
  `,

  /* =======================================================
     USUARIOS
     ======================================================= */

  usuarios: `
    <section class="screen">

      ${pageHeader("👥 Gestión de usuarios", "admin")}

      <main class="page-content">

        <div class="search-box">

          🔎

          <input
            type="search"
            placeholder="Buscar usuario..."
          >

        </div>

        <article class="profile-card">

          <div class="profile-row">

            <span>
              👨‍💼 Administrador
            </span>

            <strong>
              admin
            </strong>

          </div>

          <div class="profile-row">

            <span>
              🔐 Rol
            </span>

            <strong>
              Administrador
            </strong>

          </div>

          <div class="profile-row">

            <span>
              🟢 Estado
            </span>

            <strong>
              Activo
            </strong>

          </div>

        </article>

        <br>

        <button
          class="btn btn-primary btn-full"
          id="createUserAdmin"
        >
          ➕ Crear usuario
        </button>

      </main>

    </section>
  `,

  /* =======================================================
     CURSOS
     ======================================================= */

  cursos: `
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
  `,

  /* =======================================================
     DETALLE CURSO
     ======================================================= */

  curso: `
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
  `,

  /* =======================================================
     EVALUACIONES
     ======================================================= */

  evaluaciones: `
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
  `,

  /* =======================================================
     CERTIFICADOS
     ======================================================= */

  certificados: `
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
            >
              👁️ Ver certificado
            </button>

            <button
              class="btn btn-secondary"
              id="downloadCertificate"
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
            >
              ➕ Generar certificado
            </button>
          `
          : ""
        }

      </main>

      ${isAdmin() ? adminNavigation() : bottomNavigation()}

    </section>
  `,

  /* =======================================================
     PERFIL
     ======================================================= */

  perfil: `
    <section class="screen">

      ${pageHeader("👤 Mi perfil", isAdmin() ? "admin" : "dashboard")}

      <main class="page-content">

        <div class="profile-header">

          <div class="avatar">
            👤
          </div>

          <h2 id="profileUser">
            Usuario
          </h2>

          <p id="profileRole">
            Empleado
          </p>

        </div>

        <div class="profile-card">

          <div class="profile-row">

            <span>
              📧 Correo
            </span>

            <strong id="profileEmail">
              usuario@empresa.com
            </strong>

          </div>

          <div class="profile-row">

            <span>
              🪪 Documento
            </span>

            <strong>
              ********
            </strong>

          </div>

          <div class="profile-row">

            <span>
              🔐 Rol
            </span>

            <strong id="profileRoleValue">
              Usuario
            </strong>

          </div>

          <br>

          <button
            class="btn btn-primary btn-full"
            id="editProfile"
          >
            ✏️ Editar perfil
          </button>

        </div>

      </main>

      ${isAdmin() ? adminNavigation() : bottomNavigation()}

    </section>
  `,

  /* =======================================================
     NOTIFICACIONES
     ======================================================= */

  notificaciones: `
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
  `,

  /* =======================================================
     REPORTES
     ======================================================= */

  reportes: `
    <section class="screen">

      ${pageHeader("📊 Reportes", "admin")}

      <main class="page-content">

        <div class="quick-grid">

          <button>
            👥
            <span>
              Usuarios
            </span>
          </button>

          <button>
            📚
            <span>
              Cursos
            </span>
          </button>

          <button>
            📝
            <span>
              Evaluaciones
            </span>
          </button>

          <button>
            🏆
            <span>
              Certificados
            </span>
          </button>

        </div>

        <br>

        <article class="profile-card">

          <div class="profile-row">
            <span>
              👥 Usuarios registrados
            </span>

            <strong>
              1
            </strong>
          </div>

          <div class="profile-row">
            <span>
              📚 Cursos disponibles
            </span>

            <strong>
              3
            </strong>
          </div>

          <div class="profile-row">
            <span>
              📝 Evaluaciones
            </span>

            <strong>
              1
            </strong>
          </div>

          <div class="profile-row">
            <span>
              🏆 Certificados
            </span>

            <strong>
              1
            </strong>
          </div>

        </article>

      </main>

    </section>
  `,

  /* =======================================================
     CONFIGURACIÓN
     ======================================================= */

  configuracion: `
    <section class="screen">

      ${pageHeader("⚙️ Configuración", isAdmin() ? "admin" : "dashboard")}

      <main class="page-content">

        <button class="setting-item">
          🎛️
          <span>
            Preferencias
          </span>
        </button>

        <button class="setting-item">
          🔒
          <span>
            Seguridad
          </span>
        </button>

        <button class="setting-item">
          🔑
          <span>
            Cambiar contraseña
          </span>
        </button>

        ${
          isAdmin()
          ? `
            <button class="setting-item">
              👨‍💼
              <span>
                Administración
              </span>
            </button>
          `
          : ""
        }

        <button
          class="setting-item danger"
          id="logout"
        >
          🚪
          <span>
            Cerrar sesión
          </span>
        </button>

      </main>

    </section>
  `
};

/* =========================================================
   HEADER
   ========================================================= */

function pageHeader(title, back) {

  return `
    <header class="simple-header">

      <button
        class="back-button"
        data-screen="${back}"
      >
        ←
      </button>

      <h1>
        ${title}
      </h1>

    </header>
  `;
}

/* =========================================================
   NAVEGACIÓN USUARIO
   ========================================================= */

function bottomNavigation() {

  return `
    <nav class="bottom-navigation">

      <button data-screen="dashboard">
        🏠
        <span>
          Inicio
        </span>
      </button>

      <button data-screen="cursos">
        📚
        <span>
          Cursos
        </span>
      </button>

      <button data-screen="evaluaciones">
        📝
        <span>
          Evaluaciones
        </span>
      </button>

      <button data-screen="perfil">
        👤
        <span>
          Perfil
        </span>
      </button>

    </nav>
  `;
}

/* =========================================================
   NAVEGACIÓN ADMINISTRADOR
   ========================================================= */

function adminNavigation() {

  return `
    <nav class="bottom-navigation">

      <button data-screen="admin">
        🏠
        <span>
          Inicio
        </span>
      </button>

      <button data-screen="usuarios">
        👥
        <span>
          Usuarios
        </span>
      </button>

      <button data-screen="cursos">
        📚
        <span>
          Cursos
        </span>
      </button>

      <button data-screen="certificados">
        🏆
        <span>
          Certificados
        </span>
      </button>

      <button data-screen="perfil">
        👤
        <span>
          Perfil
        </span>
      </button>

    </nav>
  `;
}

/* =========================================================
   TARJETA CURSO
   ========================================================= */

function courseCard(
  icon,
  category,
  title,
  description
) {

  return `
    <article class="course-card">

      <div class="course-image">
        ${icon}
      </div>

      <div class="course-body">

        <span class="course-category">
          ${category}
        </span>

        <h3>
          ${title}
        </h3>

        <p>
          ${description}
        </p>

        <button
          class="btn btn-primary btn-small"
          data-screen="curso"
        >
          Ver curso
        </button>

      </div>

    </article>
  `;
}

/* =========================================================
   NOTIFICACIÓN
   ========================================================= */

function notification(
  icon,
  title,
  text
) {

  return `
    <div class="notification-card">

      <span>
        ${icon}
      </span>

      <div>

        <strong>
          ${title}
        </strong>

        <p>
          ${text}
        </p>

      </div>

    </div>
  `;
}

/* =========================================================
   RENDER
   ========================================================= */

function render(screen) {

  /*
   * Si se intenta entrar a una pantalla administrativa
   * sin ser administrador, se devuelve al inicio.
   */

  const adminScreens = [
    "admin",
    "usuarios",
    "reportes"
  ];

  if (
    adminScreens.includes(screen) &&
    !isAdmin()
  ) {

    alert(
      "Acceso restringido. Esta sección es exclusiva del administrador."
    );

    screen = "inicio";
  }

  /*
   * Si el administrador entra a cualquier pantalla
   * tiene acceso completo.
   */

  app.innerHTML =
    screens[screen] || screens.inicio;

  console.log(
    "PANTALLA CARGADA:",
    screen
  );

  /*
   * Botones de navegación
   */

  document
    .querySelectorAll("[data-screen]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          const target =
            button.dataset.screen;

          render(target);

        }
      );

    });

  activateForms();

  loadUser();

  activateAdminFunctions();
}

/* =========================================================
   FORMULARIOS
   ========================================================= */

function activateForms() {

  /* =======================================================
     LOGIN
     ======================================================= */

  const loginForm =
    document.querySelector("#loginForm");

  if (loginForm) {

    loginForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const username =
          document
            .querySelector("#loginUser")
            .value
            .trim();

        const password =
          document
            .querySelector("#loginPassword")
            .value;

        /*
         * LOGIN ADMINISTRADOR
         */

        if (
          username === ADMIN_USER &&
          password === ADMIN_PASSWORD
        ) {

          const adminUser = {

            username: "admin",

            name: "Administrador",

            email: "admin",

            role: "admin"

          };

          saveUser(adminUser);

          alert(
            "Bienvenido Administrador."
          );

          render("admin");

          return;
        }

        /*
         * LOGIN USUARIO NORMAL
         */

        const registeredUsers =
          JSON.parse(
            localStorage.getItem(
              "webTrainingUsers"
            ) || "[]"
          );

        const user =
          registeredUsers.find(
            item =>
              (
                item.email === username ||
                item.username === username
              ) &&
              item.password === password
          );

        if (!user) {

          alert(
            "Usuario o contraseña incorrectos."
          );

          return;
        }

        saveUser({

          username:
            user.username,

          name:
            user.name,

          email:
            user.email,

          role:
            "user"

        });

        alert(
          "Inicio de sesión exitoso."
        );

        render("dashboard");

      }
    );

  }

  /* =======================================================
     REGISTRO
     ======================================================= */

  const registerForm =
    document.querySelector(
      "#registerForm"
    );

  if (registerForm) {

    registerForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const name =
          document
            .querySelector("#registerName")
            .value
            .trim();

        const documentNumber =
          document
            .querySelector("#registerDocument")
            .value
            .trim();

        const email =
          document
            .querySelector("#registerEmail")
            .value
            .trim();

        const password =
          document
            .querySelector("#registerPassword")
            .value;

        /*
         * Usuarios existentes
         */

        const users =
          JSON.parse(
            localStorage.getItem(
              "webTrainingUsers"
            ) || "[]"
          );

        /*
         * Verificar correo
         */

        const exists =
          users.some(
            user =>
              user.email === email
          );

        if (exists) {

          alert(
            "Ya existe una cuenta con este correo."
          );

          return;
        }

        /*
         * Crear usuario
         */

        const newUser = {

          username:
            email,

          name,

          document:
            documentNumber,

          email,

          password,

          role:
            "user"

        };

        users.push(newUser);

        localStorage.setItem(
          "webTrainingUsers",
          JSON.stringify(users)
        );

        /*
         * Iniciar sesión automáticamente
         */

        saveUser({

          username:
            newUser.username,

          name:
            newUser.name,

          email:
            newUser.email,

          role:
            "user"

        });

        alert(
          "Cuenta creada correctamente."
        );

        render("dashboard");

      }
    );

  }

  /* =======================================================
     RECUPERACIÓN
     ======================================================= */

  const recoverForm =
    document.querySelector(
      "#recoverForm"
    );

  if (recoverForm) {

    recoverForm.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        alert(
          "Se enviaron las instrucciones de recuperación."
        );

        render("login");

      }
    );

  }

  /* =======================================================
     EVALUACIÓN
     ======================================================= */

  const evaluation =
    document.querySelector(
      "#startEvaluation"
    );

  if (evaluation) {

    evaluation.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará el módulo de evaluación."
        );

      }
    );

  }

  /* =======================================================
     LOGOUT
     ======================================================= */

  const logout =
    document.querySelector(
      "#logout"
    );

  if (logout) {

    logout.addEventListener(
      "click",
      () => {

        localStorage.removeItem(
          "webTrainingUser"
        );

        alert(
          "Sesión cerrada correctamente."
        );

        render("inicio");

      }
    );

  }
}

/* =========================================================
   FUNCIONES ADMINISTRATIVAS
   ========================================================= */

function activateAdminFunctions() {

  /*
   * Si no es administrador,
   * no ejecutar funciones administrativas.
   */

  if (!isAdmin()) {
    return;
  }

  /* =======================================================
     CREAR USUARIO
     ======================================================= */

  const createUser =
    document.querySelector(
      "#createUserAdmin"
    );

  if (createUser) {

    createUser.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará el módulo para crear usuarios."
        );

      }
    );

  }

  /* =======================================================
     CREAR CURSO
     ======================================================= */

  const createCourse =
    document.querySelector(
      "#createCourse"
    );

  if (createCourse) {

    createCourse.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará el módulo para crear cursos."
        );

      }
    );

  }

  /* =======================================================
     EDITAR CURSO
     ======================================================= */

  const editCourse =
    document.querySelector(
      "#editCourse"
    );

  if (editCourse) {

    editCourse.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará el módulo para editar cursos."
        );

      }
    );

  }

  /* =======================================================
     CREAR EVALUACIÓN
     ======================================================= */

  const createEvaluation =
    document.querySelector(
      "#createEvaluation"
    );

  if (createEvaluation) {

    createEvaluation.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará el módulo para crear evaluaciones."
        );

      }
    );

  }

  /* =======================================================
     CREAR CERTIFICADO
     ======================================================= */

  const createCertificate =
    document.querySelector(
      "#createCertificate"
    );

  if (createCertificate) {

    createCertificate.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará el módulo para generar certificados."
        );

      }
    );

  }

  /* =======================================================
     VER CERTIFICADO
     ======================================================= */

  const viewCertificate =
    document.querySelector(
      "#viewCertificate"
    );

  if (viewCertificate) {

    viewCertificate.addEventListener(
      "click",
      () => {

        alert(
          "Vista previa del certificado."
        );

      }
    );

  }

  /* =======================================================
     DESCARGAR CERTIFICADO
     ======================================================= */

  const downloadCertificate =
    document.querySelector(
      "#downloadCertificate"
    );

  if (downloadCertificate) {

    downloadCertificate.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará la descarga del certificado."
        );

      }
    );

  }

  /* =======================================================
     EDITAR PERFIL
     ======================================================= */

  const editProfile =
    document.querySelector(
      "#editProfile"
    );

  if (editProfile) {

    editProfile.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se conectará la edición del perfil."
        );

      }
    );

  }

}

/* =========================================================
   CARGAR INFORMACIÓN DEL USUARIO
   ========================================================= */

function loadUser() {

  const user =
    getCurrentUser();

  if (!user) {
    return;
  }

  const dashboardUser =
    document.querySelector(
      "#dashboardUser"
    );

  const profileUser =
    document.querySelector(
      "#profileUser"
    );

  const profileEmail =
    document.querySelector(
      "#profileEmail"
    );

  const profileRole =
    document.querySelector(
      "#profileRole"
    );

  const profileRoleValue =
    document.querySelector(
      "#profileRoleValue"
    );

  if (dashboardUser) {

    dashboardUser.textContent =
      user.name;

  }

  if (profileUser) {

    profileUser.textContent =
      user.name;

  }

  if (profileEmail) {

    profileEmail.textContent =
      user.email || "Sin correo";

  }

  if (profileRole) {

    profileRole.textContent =
      user.role === "admin"
        ? "Administrador"
        : "Empleado";

  }

  if (profileRoleValue) {

    profileRoleValue.textContent =
      user.role === "admin"
        ? "Administrador"
        : "Usuario";

  }

}

/* =========================================================
   INICIO DE LA APLICACIÓN
   ========================================================= */

const currentUser =
  getCurrentUser();

if (currentUser) {

  if (
    currentUser.role === "admin"
  ) {

    render("admin");

  } else {

    render("dashboard");

  }

} else {

  render("inicio");

}

console.log(
  "Web Training Empresarial iniciado correctamente."
);