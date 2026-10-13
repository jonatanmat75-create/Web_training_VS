export function notification(

  icon,
  title,
  text
) {
  return `
    <div class="notification-card">

      <span>
        ${icon}
      </span>

      <div>

        <strong>
          ${title}ss
        </strong>

        <p>
          ${text}
        </p>

      </div>

    </div>
  `;
}
