export function courseCard(
  icon,
  category,
  title,
  description
) {
  return `
    <article class="course-card">

      <div class="course-image">
        ${icon}
      </div>

      <div class="course-body">

        <span class="course-category">
          ${category}
        </span>

        <h3>${title}</h3>

        <p>${description}</p>

        <button
          class="btn btn-primary btn-small"
          data-screen="curso"
        >
          Ver curso
        </button>

      </div>

    </article>
  `;
}
