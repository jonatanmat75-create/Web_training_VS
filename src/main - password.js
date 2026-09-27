import "./styles.css";

const app = document.querySelector("#app");


/* =========================================================
   CONFIGURACIÓN DEL ADMINISTRADOR
   ========================================================= */

const ADMIN_USER = "admin";

const ADMIN_PASSWORD_HASH =
  "0a5bc3e342432f1bad92ffd51b785343ec72906cdba6a26131060b008e786656";


/* =========================================================
   UTILIDADES
   ========================================================= */

async function hashPassword(password) {

  const encoder = new TextEncoder();

  const data = encoder.encode(password);

  const hashBuffer = await crypto.subtle.digest(
    "SHA-256",
    data
  );

  const hashArray =
    Array.from(new Uint8Array(hashBuffer));

  return hashArray
    .map(byte =>
      byte.toString(16).padStart(2, "0")
    )
    .join("");
}


/* =========================================================
   VALIDAR ADMINISTRADOR
   ========================================================= */

async function validateAdmin(username, password) {

  if (username !== ADMIN_USER) {
    return false;
  }

  const passwordHash =
    await hashPassword(password);

  return passwordHash === ADMIN_PASSWORD_HASH;
}


/* =========================================================
   USUARIO ACTUAL
   ========================================================= */

function getCurrentUser() {

  const saved =
    localStorage.getItem("webTrainingUser");

  if (!saved) {
    return null;
  }

  try {

    return JSON.parse(saved);

  } catch {

    localStorage.removeItem(
      "webTrainingUser"
    );

    return null;
  }
}


function isAdmin() {

  const user =
    getCurrentUser();

  return user?.role === "admin";
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
                autocomplete="username"
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
                autocomplete="current-password"
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
                minlength="6"
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
     DASHBOARD
     ======================================================= */

  dashboard: `
    <section class="screen">

      <header class="app-header">

        <div class="brand">

          <div class="brand-icon">
            🎓
          </div>

          <div>

            <strong>
              Web Training
            </strong>

            <span>
              Empresarial
            </span>

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

            <article class="course-card">

              <div class="course-image">
                🔐
              </div>

              <div class="course-body">

                <span class="course-category">
                  Seguridad
                </span>

                <h3>
                  Seguridad de la información
                </h3>


                <div class="mini-progress">

                  <div
                    style="width:75%"
                  ></div>

                </div>


                <span class="course-progress">
                  75% completado
                </span>


                <button
                  class="btn btn-primary btn-small"
                  data-screen="curso"
                >
                  Continuar
                </button>

              </div>

            </article>

          </div>

        </section>


        <section>

          <h2>
            ⚡ Accesos rápidos
          </h2>


          <div class="quick-grid">

            <button data-screen="cursos">
              📚
              <span>
                Mis cursos
              </span>
            </button>


            <button data-screen="evaluaciones">
              📝
              <span>
                Evaluaciones
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
                Mi perfil
              </span>
            </button>


            ${
              isAdmin()
                ? `
                  <button data-screen="administracion">
                    👑
                    <span>
                      Administración
                    </span>
                  </button>
                `
                : ""
            }

          </div>

        </section>

      </main>


      ${bottomNavigation()}

    </section>
  `,


  /* =======================================================
     CURSOS
     ======================================================= */

  cursos: `
    <section class="screen">

      ${pageHeader("📚 Mis cursos", "dashboard")}

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

      </main>


      ${bottomNavigation()}

    </section>
  `,


  /* =======================================================
     CURSO
     ======================================================= */

  curso: `
    <section class="screen">

      ${pageHeader("📖 Curso", "cursos")}

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

              <strong>
                Duración
              </strong>

              <span>
                4 horas
              </span>

            </div>


            <div>

              📊

              <strong>
                Progreso
              </strong>

              <span>
                75%
              </span>

            </div>

          </div>


          <h3>
            📚 Contenido
          </h3>


          <div class="module">

            <span>
              01
            </span>

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

            <span>
              02
            </span>

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

            <span>
              03
            </span>

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

        </article>

      </main>

    </section>
  `,


  /* =======================================================
     EVALUACIONES
     ======================================================= */

  evaluaciones: `
    <section class="screen">

      ${pageHeader("📝 Evaluaciones", "dashboard")}

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

      </main>


      ${bottomNavigation()}

    </section>
  `,


  /* =======================================================
     CERTIFICADOS
     ======================================================= */

  certificados: `
    <section class="screen">

      ${pageHeader("🏆 Certificados", "dashboard")}

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

      </main>


      ${bottomNavigation()}

    </section>
  `,


  /* =======================================================
     PERFIL
     ======================================================= */

  perfil: `
    <section class="screen">

      ${pageHeader("👤 Mi perfil", "dashboard")}

      <main class="page-content">

        <div class="profile-header">

          <div class="avatar">
            👤
          </div>


          <h2 id="profileUser">
            Usuario
          </h2>


          <p id="profileRole">
            Usuario
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


          <br>


          <button
            class="btn btn-primary btn-full"
            id="editProfile"
          >
            ✏️ Editar perfil
          </button>

        </div>

      </main>


      ${bottomNavigation()}

    </section>
  `,


  /* =======================================================
     NOTIFICACIONES
     ======================================================= */

  notificaciones: `
    <section class="screen">

      ${pageHeader("🔔 Notificaciones", "dashboard")}

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
     CONFIGURACIÓN
     ======================================================= */

  configuracion: `
    <section class="screen">

      ${pageHeader("⚙️ Configuración", "dashboard")}

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
  `,


  /* =======================================================
     ADMINISTRACIÓN
     ======================================================= */

  administracion: `
    <section class="screen">

      ${pageHeader("👑 Administración", "dashboard")}

      <main class="page-content">

        <article class="welcome-card">

          <div>

            <span class="small-text">
              Panel administrativo
            </span>

            <h2>
              👑 Administrador
            </h2>

            <p>
              Tiene acceso completo a la plataforma.
            </p>

          </div>

          <div class="welcome-icon">
            🔐
          </div>

        </article>


        <section>

          <h2>
            ⚡ Acceso completo
          </h2>


          <div class="quick-grid">

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


            <button data-screen="notificaciones">
              🔔
              <span>
                Notificaciones
              </span>
            </button>


            <button data-screen="configuracion">
              ⚙️
              <span>
                Configuración
              </span>
            </button>

          </div>

        </section>


        <section>

          <h2>
            👥 Gestión
          </h2>


          <div class="profile-card">

            <div class="profile-row">

              <span>
                👑 Usuario
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
                🛡️ Permisos
              </span>

              <strong>
                Acceso total
              </strong>

            </div>

          </div>

        </section>

      </main>


      ${bottomNavigation()}

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
   NAVEGACIÓN INFERIOR
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
   TARJETA DE CURSO
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
   NOTIFICACIONES
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
   CONTROL DE NAVEGACIÓN
   ========================================================= */

function canAccessScreen(screen) {

  const publicScreens = [
    "inicio",
    "login",
    "registro",
    "recuperar"
  ];

  if (publicScreens.includes(screen)) {
    return true;
  }


  const user = getCurrentUser();


  if (!user) {

    alert(
      "Debe iniciar sesión para acceder a esta sección."
    );

    return false;
  }


  /*
    ADMINISTRADOR:
    acceso absolutamente a todo.
  */

  if (user.role === "admin") {
    return true;
  }


  /*
    USUARIO NORMAL:
    acceso a las funciones de capacitación.
  */

  const userScreens = [
    "dashboard",
    "cursos",
    "curso",
    "evaluaciones",
    "certificados",
    "perfil",
    "notificaciones",
    "configuracion"
  ];

  return userScreens.includes(screen);
}


/* =========================================================
   RENDER
   ========================================================= */

function render(screen) {

  if (!canAccessScreen(screen)) {
    return;
  }


  app.innerHTML =
    screens[screen] || screens.inicio;


  document
    .querySelectorAll("[data-screen]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          render(
            button.dataset.screen
          );

        }
      );

    });


  activateForms();

  activateButtons();

  loadUser();
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
      async event => {

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


        /* -------------------------------------------------
           ADMINISTRADOR
           ------------------------------------------------- */

        if (
          await validateAdmin(
            username,
            password
          )
        ) {

          localStorage.setItem(
            "webTrainingUser",
            JSON.stringify({

              name: "Administrador",

              username: "admin",

              email: "admin",

              role: "admin",

              isAdmin: true

            })
          );


          alert(
            "Bienvenido, Administrador."
          );


          render("dashboard");

          return;
        }


        /* -------------------------------------------------
           USUARIOS REGISTRADOS
           ------------------------------------------------- */

        const users =
          JSON.parse(
            localStorage.getItem(
              "webTrainingUsers"
            ) || "[]"
          );


        const user =
          users.find(
            item =>
              (
                item.email === username ||
                item.username === username
              )
              &&
              item.password === password
          );


        if (!user) {

          alert(
            "Usuario o contraseña incorrectos."
          );

          return;
        }


        localStorage.setItem(
          "webTrainingUser",
          JSON.stringify({

            name: user.name,

            username: user.username,

            email: user.email,

            document: user.document,

            role: "user",

            isAdmin: false

          })
        );


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
            .querySelector(
              "#registerName"
            )
            .value
            .trim();


        const documentNumber =
          document
            .querySelector(
              "#registerDocument"
            )
            .value
            .trim();


        const email =
          document
            .querySelector(
              "#registerEmail"
            )
            .value
            .trim()
            .toLowerCase();


        const password =
          document
            .querySelector(
              "#registerPassword"
            )
            .value;


        if (
          name === "" ||
          documentNumber === "" ||
          email === "" ||
          password === ""
        ) {

          alert(
            "Complete todos los campos."
          );

          return;
        }


        if (password.length < 6) {

          alert(
            "La contraseña debe tener mínimo 6 caracteres."
          );

          return;
        }


        /*
          No permitir crear otro usuario llamado admin.
        */

        if (
          email === "admin"
        ) {

          alert(
            "Ese usuario está reservado para el administrador."
          );

          return;
        }


        let users =
          JSON.parse(
            localStorage.getItem(
              "webTrainingUsers"
            ) || "[]"
          );


        const exists =
          users.some(
            user =>
              user.email === email
          );


        if (exists) {

          alert(
            "Ya existe una cuenta con ese correo."
          );

          return;
        }


        const newUser = {

          id:
            Date.now(),

          name,

          username:
            email,

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
          Iniciar sesión automáticamente.
        */

        localStorage.setItem(
          "webTrainingUser",
          JSON.stringify({

            name,

            username:
              email,

            email,

            document:
              documentNumber,

            role:
              "user",

            isAdmin:
              false

          })
        );


        alert(
          "Cuenta creada correctamente."
        );


        render("dashboard");

      }
    );

  }


  /* =======================================================
     RECUPERAR CONTRASEÑA
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

}


/* =========================================================
   BOTONES
   ========================================================= */

function activateButtons() {


  /* -------------------------------------------------------
     EVALUACIÓN
     ------------------------------------------------------- */

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


  /* -------------------------------------------------------
     CERTIFICADO
     ------------------------------------------------------- */

  const viewCertificate =
    document.querySelector(
      "#viewCertificate"
    );


  if (viewCertificate) {

    viewCertificate.addEventListener(
      "click",
      () => {

        alert(
          "Visualización del certificado."
        );

      }
    );

  }


  const downloadCertificate =
    document.querySelector(
      "#downloadCertificate"
    );


  if (downloadCertificate) {

    downloadCertificate.addEventListener(
      "click",
      () => {

        alert(
          "Aquí se realizará la descarga del certificado."
        );

      }
    );

  }


  /* -------------------------------------------------------
     EDITAR PERFIL
     ------------------------------------------------------- */

  const editProfile =
    document.querySelector(
      "#editProfile"
    );


  if (editProfile) {

    editProfile.addEventListener(
      "click",
      () => {

        alert(
          "Módulo de edición de perfil."
        );

      }
    );

  }


  /* -------------------------------------------------------
     LOGOUT
     ------------------------------------------------------- */

  const logout =
    document.querySelector(
      "#logout"
    );


  if (logout) {

    logout.addEventListener(
      "click",
      logoutUser
    );

  }


  /*
    También soporta el botón específico
    del administrador si posteriormente
    decides agregarlo a otra pantalla.
  */

  const adminLogout =
    document.querySelector(
      "#adminLogout"
    );


  if (adminLogout) {

    adminLogout.addEventListener(
      "click",
      logoutUser
    );

  }

}


/* =========================================================
   CERRAR SESIÓN
   ========================================================= */

function logoutUser() {

  localStorage.removeItem(
    "webTrainingUser"
  );


  alert(
    "Sesión cerrada correctamente."
  );


  render("inicio");
}


/* =========================================================
   CARGAR DATOS DEL USUARIO
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
      user.email;

  }


  if (profileRole) {

    profileRole.textContent =
      user.role === "admin"
        ? "Administrador"
        : "Empleado";

  }

}


/* =========================================================
   INICIAR APLICACIÓN
   ========================================================= */

console.log(
  "WEB TRAINING CARGADO"
);

console.log(
  "APP:",
  app
);

render("inicio");