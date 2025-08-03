// assets/js/includes.js

document.addEventListener("DOMContentLoaded", () => {
  const load = (id, file) => {
    const el = document.getElementById(id);
    if (el) {
      fetch(file)
        .then(res => res.ok ? res.text() : "")
        .then(data => {
          el.innerHTML = data;

          // If loading nav, highlight current page
          if (id === "nav-placeholder") highlightCurrentNav();
        });
    }
  };

  load("head-placeholder", "partials/head.html");
  load("head-secondary-placeholder", "partials/head-secondary.html");
  load("nav-placeholder", "partials/nav.html");
  load("footer-placeholder", "partials/footer.html");
});

// Highlight nav link for current page
function highlightCurrentNav() {
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href").endsWith(current)) {
      link.classList.add("active");
    }
  });
}
