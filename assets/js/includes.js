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

document.addEventListener("DOMContentLoaded", () => {
  const currentPath = window.location.pathname.split("/").pop();

  // Highlight current nav link
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.split("/").pop() === currentPath) {
      link.classList.add("active");
    }
  });

  // Standard social icon styling (in case of dynamically inserted icons later)
  document.querySelectorAll(".socials i, .socials svg").forEach(icon => {
    icon.style.margin = "0 10px";
    icon.style.verticalAlign = "middle";
  });

  // Add scale & alignment for SVG (Reddit fix)
  document.querySelectorAll(".socials svg").forEach(svg => {
    svg.style.transform = "scale(1.2)";
    svg.style.verticalAlign = "middle";
    svg.style.fill = "#FF4500";
    svg.style.margin = "0 10px";
  });
});

