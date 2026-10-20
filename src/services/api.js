const API_URL = "http://localhost:5000";

export async function solicitudApi(ruta, opciones = {}) {
  const respuesta = await fetch(`${API_URL}${ruta}`, {
    ...opciones,
    headers: {
      "Content-Type": "application/json",
      ...opciones.headers,
    },
  });

  let datos = null;

  try {
    datos = await respuesta.json();
  } catch {
    datos = null;
  }

  if (!respuesta.ok) {
    const mensaje =
      datos?.mensaje ||
      datos?.error ||
      "Ocurrió un error al comunicarse con la API.";

    throw new Error(mensaje);
  }

  return datos;
}

export default API_URL;