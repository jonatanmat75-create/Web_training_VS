export default function CourseCard({
  titulo,
  categoria,
  instructor,
  duracion,
  descripcion,
  progreso = 0,
  icono = "📚",
  onVerCurso,
}) {
  return (
    <article className="course-card">
      <div className="course-image">
        {icono}
      </div>

      <div className="course-body">
        <span className="course-category">
          {categoria}
        </span>

        <h3>{titulo}</h3>

        <p>
          <strong>Instructor:</strong>{" "}
          {instructor}
        </p>

        <p>
          <strong>Duración:</strong>{" "}
          {duracion}
        </p>

        <p>{descripcion}</p>

        <div className="mini-progress">
          <div
            style={{
              width: `${progreso}%`,
            }}
          />
        </div>

        <small className="course-progress">
          Progreso: {progreso}%
        </small>

        <button
          className="btn btn-primary btn-small"
          type="button"
          onClick={onVerCurso}
          style={{ marginTop: "15px" }}
        >
          Ver curso
        </button>
      </div>
    </article>
  );
}
