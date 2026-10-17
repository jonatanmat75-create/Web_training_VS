import { useState } from "react";

export default function Login({ onNavigate }) {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Datos del login:", {
      correo,
      contrasena
    });

    alert("Formulario de inicio de sesión enviado.");
  };

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          type="button"
          onClick={() => onNavigate("inicio")}
        >
          ←
        </button>

        <h1>Iniciar sesión</h1>
      </header>

      <main className="form-container">
        <div className="form-card">
          <div className="form-icon">🔐</div>

          <h2>Bienvenido</h2>

          <p className="form-description">
            Ingresa tus datos para acceder a Web Training.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="loginEmail">
                Correo electrónico
              </label>

              <input
                id="loginEmail"
                type="email"
                placeholder="correo@empresa.com"
                value={correo}
                onChange={(event) => setCorreo(event.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="loginPassword">
                Contraseña
              </label>

              <input
                id="loginPassword"
                type="password"
                placeholder="Ingrese su contraseña"
                value={contrasena}
                onChange={(event) => setContrasena(event.target.value)}
                required
              />
            </div>

            <button
              className="btn btn-primary btn-full"
              type="submit"
            >
              🔐 Ingresar
            </button>
          </form>

          <p className="register-text">
            ¿No tiene una cuenta?{" "}
            <button
              className="inline-link"
              type="button"
              onClick={() => onNavigate("registro")}
            >
              Registrarse
            </button>
          </p>
        </div>
      </main>
    </section>
  );
}