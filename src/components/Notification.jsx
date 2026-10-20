export default function Notification({
  titulo,
  mensaje,
  fecha,
}) {
  return (
    <div className="card">
      <h3>{titulo}</h3>
      <p>{mensaje}</p>
      <small>{fecha}</small>
    </div>
  );
}