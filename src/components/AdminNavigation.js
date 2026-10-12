export function adminNavigation() {

  return `
    <nav class="bottom-navigation">

      <button data-screen="admin">
        🏠
        <span>Inicio</span>
      </button>

      <button data-screen="usuarios">
        👥
        <span>Usuarios</span>
      </button>

      <button data-screen="cursos">
        📚
        <span>Cursos</span>
      </button>

      <button data-screen="certificados">
        🏆
        <span>Certificados</span>
      </button>

      <button data-screen="perfil">
        👤
        <span>Perfil</span>
      </button>

    </nav>
  `;
}