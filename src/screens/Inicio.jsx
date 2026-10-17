export default function Inicio({ onNavigate }) {
  return (
    <section className="screen">
      <header className="public-header">
        <div className="brand">
          <div className="brand-icon">🎓</div>

          <div className="brand-text">
            <h1>Web Training</h1>
            <span>Empresarial</span>
          </div>
        </div>
      </header>

      <main className="hero">
        <div className="hero-content">
          <div className="hero-icon">🎓</div>

          <h2>Capacitación empresarial</h2>

          <p>
            Aprende, evalúa tus conocimientos, consulta tu progreso y obtén tus
            certificados.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => onNavigate("login")}
            >
              🔐 Iniciar sesión
            </button>

            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => onNavigate("registro")}
            >
              📝 Crear cuenta
            </button>
          </div>
        </div>
      </main>
    </section>
  );
}