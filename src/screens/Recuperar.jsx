import { useState } from "react";

export default function Recuperar({ onNavigate }) {
  const [correo, setCorreo] = useState("");

  const recuperarClave = () => {
    if (!correo) {
      alert("Ingrese un correo electrónico");
      return;
    }

    alert(`Se envió un enlace de recuperación a ${correo}`);
  };

  return (
    <div className="container">
      <h1>🔑 Recuperar Contraseña</h1>

      <input
        type="email"
        placeholder="Correo electrónico"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
      />

      <br /><br />

      <button onClick={recuperarClave}>
        Recuperar Contraseña
      </button>

      <button onClick={() => onNavigate("login")}>
        Volver al Login
      </button>
    </div>
  );
}
