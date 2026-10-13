import { pageHeader } from "../components/Header";
import { bottomNavigation } from "../components/BottomNavigation";
import { adminNavigation } from "../components/AdminNavigation";
import { isAdmin } from "../utils/auth";

export const perfil = `
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
  `;