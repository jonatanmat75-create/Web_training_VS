export const login = `
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
`;