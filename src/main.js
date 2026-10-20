import "./styles.css";

import { inicio } from "./screens/Inicio";
import { login } from "./screens/Login";
import { registro } from "./screens/Registro";
import { dashboard } from "./screens/Dashboard";
import { admin } from "./screens/Admin";
import { recuperar } from "./screens/Recuperar";
import { certificados } from "./screens/Certificados";
import { configuracion } from "./screens/Configuracion";
import { curso } from "./screens/Curso";
import { cursos } from "./screens/Cursos";
import { evaluaciones } from "./screens/Evaluaciones";
import { notificaciones } from "./screens/Notificaciones";
import { perfil } from "./screens/Perfil";
import { usuarios } from "./screens/Usuarios";
import { reportes } from "./screens/Reportes";

const app = document.querySelector("#app");

console.log("WEB TRAINING CARGADO");
console.log("APP:", app);

/* =========================================================
   CONFIGURACIÓN DEL ADMINISTRADOR
   ========================================================= */

const ADMIN_USER = "Admin";
const ADMIN_PASSWORD = "123456789*";

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
  inicio,
  login,
  registro,
  dashboard,
  admin,
  recuperar,
  certificados,
  configuracion,
  curso,
  cursos,
  evaluaciones,
  notificaciones,
  perfil,
  reportes,
  usuarios
};

/* =========================================================
   RENDER
   ========================================================= */

function render(screen) {

  console.log("RENDER;", screen); 
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

const currentUser = getCurrentUser();

if (currentUser) {

  if (currentUser.role === "admin") {
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