export default function Usuarios({ onNavigate }) {
  const usuarios = [
    {
      id: 1,
      nombre: "Administrador",
      correo: "admin@webtraining.com",
      rol: "Administrador",
    },
    {
      id: 2,
      nombre: "Juan Pérez",
      correo: "juan@correo.com",
      rol: "Aprendiz",
    },
    {
      id: 3,
      nombre: "María Gómez",
      correo: "maria@correo.com",
      rol: "Instructor",
    },
  ];

  const editarUsuario = (usuario) => {
    alert(`Editar usuario: ${usuario.nombre}`);
  };

  const eliminarUsuario = (usuario) => {
    const confirmar = window.confirm(
      `¿Desea eliminar a ${usuario.nombre}?`
    );

    if (confirmar) {
      alert(`Usuario ${usuario.nombre} eliminado`);
    }
  };

  return (
    <section className="screen">
      <header className="simple-header">
        <button
          className="back-button"
          type="button"
          onClick={() => onNavigate("admin")}
        >
          ←
        </button>

        <h1>👥 Gestión de Usuarios</h1>
      </header>

      <main className="page-content">
        <section className="welcome-card">
          <div>
            <span className="small-text">
              Administración de usuarios
            </span>

            <h2>Usuarios registrados</h2>

            <p>
              Administre aprendices, instructores y
              administradores de la plataforma.
            </p>
          </div>

          <div className="welcome-icon">
            👥
          </div>
        </section>

        <section className="profile-card">
          {usuarios.map((usuario) => (
            <div
              key={usuario.id}
              className="profile-row"
            >
              <div>
                <strong>{usuario.nombre}</strong>

                <p
                  style={{
                    color: "#68758a",
                    marginTop: "4px",
                  }}
                >
                  {usuario.correo}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <strong>{usuario.rol}</strong>

                <button
                  className="btn btn-primary btn-small"
                  type="button"
                  onClick={() =>
                    editarUsuario(usuario)
                  }
                >
                  ✏️ Editar
                </button>

                <button
                  className="btn btn-secondary btn-small"
                  type="button"
                  onClick={() =>
                    eliminarUsuario(usuario)
                  }
                >
                  🗑️ Eliminar
                </button>
              </div>
            </div>
          ))}
        </section>

        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <button
            className="btn btn-primary"
            type="button"
            onClick={() =>
              alert("Crear nuevo usuario")
            }
          >
            ➕ Nuevo Usuario
          </button>
        </div>
      </main>
    </section>
  );
}