function InicioIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-7h6v7" />
    </svg>
  );
}

function UsuariosIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="8" r="4" />
      <path d="M2.5 21v-2a6.5 6.5 0 0 1 13 0v2" />
      <circle cx="17" cy="8" r="3" />
      <path d="M17 14a5 5 0 0 1 5 5v2" />
    </svg>
  );
}

function CursosIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H11a3 3 0 0 1 3 3v15a3 3 0 0 0-3-3H6.5A2.5 2.5 0 0 0 4 20.5Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H14v18a3 3 0 0 1 3-3h.5a2.5 2.5 0 0 1 2.5 2.5Z" />
    </svg>
  );
}

function CertificadosIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="8" r="5" />
      <path d="m8.5 12-1 9 3.5-2 1-3 1 3 3.5 2-1-9" />
      <path d="m10 8 1.3 1.3L14 6.5" />
    </svg>
  );
}

function NotificacionesIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M10 21h4" />
    </svg>
  );
}

function PerfilIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </svg>
  );
}

export default function BottomNavigation({
  pantallaActual,
  esAdmin = false,
  onNavigate,
}) {
  const opcionesAdministrador = [
    {
      pantalla: "admin",
      texto: "Inicio",
      icono: <InicioIcon />,
    },
    {
      pantalla: "usuarios",
      texto: "Usuarios",
      icono: <UsuariosIcon />,
    },
    {
      pantalla: "cursos",
      texto: "Cursos",
      icono: <CursosIcon />,
    },
    {
      pantalla: "notificaciones",
      texto: "Alertas",
      icono: <NotificacionesIcon />,
      cantidad: 4,
    },
    {
      pantalla: "perfil",
      texto: "Perfil",
      icono: <PerfilIcon />,
    },
  ];

  const opcionesUsuario = [
    {
      pantalla: "dashboard",
      texto: "Inicio",
      icono: <InicioIcon />,
    },
    {
      pantalla: "cursos",
      texto: "Cursos",
      icono: <CursosIcon />,
    },
    {
      pantalla: "certificados",
      texto: "Certificados",
      icono: <CertificadosIcon />,
    },
    {
      pantalla: "notificaciones",
      texto: "Alertas",
      icono: <NotificacionesIcon />,
      cantidad: 4,
    },
    {
      pantalla: "perfil",
      texto: "Perfil",
      icono: <PerfilIcon />,
    },
  ];

  const opciones = esAdmin
    ? opcionesAdministrador
    : opcionesUsuario;

  return (
    <nav
      className="bottom-navigation"
      aria-label="Navegación inferior"
    >
      {opciones.map((opcion) => {
        const estaActiva =
          pantallaActual === opcion.pantalla;

        return (
          <button
            key={opcion.pantalla}
            className={
              estaActiva
                ? "bottom-navigation-item active"
                : "bottom-navigation-item"
            }
            type="button"
            aria-label={opcion.texto}
            aria-current={estaActiva ? "page" : undefined}
            onClick={() =>
              onNavigate(opcion.pantalla)
            }
          >
            <span className="bottom-navigation-icon">
              {opcion.icono}

              {opcion.cantidad > 0 && (
                <span className="bottom-navigation-badge">
                  {opcion.cantidad}
                </span>
              )}
            </span>

            <span className="bottom-navigation-text">
              {opcion.texto}
            </span>
          </button>
        );
      })}
    </nav>
  );
}