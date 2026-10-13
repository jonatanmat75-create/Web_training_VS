import { pageHeader } from "../components/Header";

export const usuarios = `
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
  `;