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
  `