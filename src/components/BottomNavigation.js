export function bottomNavigation() {

  return 
    <nav class="bottom-navigation">

      <button data-screen="dashboard">
        🏠
        <span>Inicio</span>
      </button>

      <button data-screen="cursos">
        📚
        <span>Cursos</span>
      </button>

      <button data-screen="evaluaciones">
        📝
        <span>Evaluaciones</span>
      </button>

      <button data-screen="perfil">
        👤
        <span>Perfil</span>
      </button>

    </nav>
  ;
}