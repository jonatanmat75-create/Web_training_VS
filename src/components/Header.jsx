export default function Header({
  titulo = "Web Training",
  usuario,
  onLogout,
}) {
  return (
    <header className="navbar">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2 style={{ color: "white" }}>{titulo}</h2>

        {usuario && (
          <div>
            <span style={{ marginRight: "10px" }}>
              {usuario.nombre}
            </span>

            <button onClick={onLogout}>
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
}