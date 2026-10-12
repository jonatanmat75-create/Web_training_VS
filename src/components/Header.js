export function pageHeader(title, back) {
  return 
    <header class="simple-header">
      <button
        class="back-button"
        data-screen="${back}"
      >
        ←
      </button>

      <h1>
        ${title}
      </h1>

    </header>
  ;
}