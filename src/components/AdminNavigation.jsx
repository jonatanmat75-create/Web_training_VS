export default function AdminNavigation({ onNavigate }) {
  return (
    <div className="card">
      <h2>Panel Administrativo</h2>

      <button onClick={() => onNavigate("usuarios")}>
        Usuarios
      </button>

      <button onClick={() => onNavigate("cursos")}>
        Cursos
      </button>

      <button onClick={() => onNavigate("evaluaciones")}>
        Evaluaciones
      </button>
    </div>
  );
}