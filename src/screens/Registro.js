export const registro = `
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
          <label>Nombre completo</label>
          <input
            id="registerName"
            type="text"
            placeholder="Nombre completo"
            required
          >
        </div>

        <div class="form-group">
          <label>Documento</label>
          <input
            id="registerDocument"
            type="text"
            placeholder="Número de documento"
            required
          >
        </div>

        <div class="form-group">
          <label>Correo electrónico</label>
          <input
            id="registerEmail"
            type="email"
            placeholder="correo@empresa.com"
            required
          >
        </div>

        <div class="form-group">
          <label>Contraseña</label>
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
`;
