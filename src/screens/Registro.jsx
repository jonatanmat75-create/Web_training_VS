import { useState } from "react";

export default function Registro({ onNavigate }) {
  const [formulario, setFormulario] = useState({
    nombre: "",
    documento: "",
    correo: "",
    contrasena: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormulario((datosActuales) => ({
      ...datosActuales,
      value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Datos del registro:", formulario);

    alert("Formulario de registro enviado.");
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

        <h1>Crear cuenta</h1>
      </header>

      <main className="form-container">
        <div className="form-card">
          <div className="form-icon">📝</div>

          <h2>Registro</h2>

          <p className="form-description">
            Complete la información para crear su cuenta.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="registerName">
                Nombre completo
              </label>

              <input
                id="registerName"
                name="nombre"
                type="text"
                placeholder="Nombre completo"
                value={formulario.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerDocument">
                Documento
              </label>

              <input
                id="registerDocument"
                name="documento"
                type="text"
                inputMode="numeric"
                placeholder="Número de documento"
                value={formulario.documento}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerEmail">
                Correo electrónico
              </label>

              <input
                id="registerEmail"
                name="correo"
                type="email"
                placeholder="correo@empresa.com"
                value={formulario.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="registerPassword">
                Contraseña
              </label>

              <input
                id="registerPassword"
                name="contrasena"
                type="password"
                placeholder="Crear contraseña"
                value={formulario.contrasena}
                onChange={handleChange}
                required
              />
            </div>

            <button
              className="btn btn-primary btn-full"
              type="submit"
            >
              ✅ Crear cuenta
            </button>
          </form>
        </div>
      </main>
    </section>
  );
}