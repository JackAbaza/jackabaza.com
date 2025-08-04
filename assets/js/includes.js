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

  load("nav-placeholder", "partials/nav.html")});

// Highlight nav link for current page
function highlightCurrentNav() {
  const current = window.location.pathname.split("/").pop();
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href").endsWith(current)) {
      link.classList.add("active");
    }
  });
}

// Highlight current nav link
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href').endsWith(path)) {
    link.classList.add('active');
  }
});

window.addEventListener("load", () => {
  const nav = document.getElementById("nav-placeholder");
  if (nav) {
    nav.innerHTML = `
      <nav>
        <a href="index.html" class="nav-link">Home</a>
        <a href="pages/about.html" class="nav-link">About</a>
        <a href="pages/book.html" class="nav-link">Book</a>
        <a href="pages/contact.html" class="nav-link">Contact</a>
        <a href="pages/blog/post1.html" class="nav-link">Blog</a>
        <a href="pages/forum.html" class="nav-link">Forum</a>
        <a href="pages/register.html" class="nav-link">Register</a>
      </nav>
    `;

    // Highlight current page
    const path = location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(a => {
      if (a.getAttribute("href").includes(path)) {
        a.classList.add("active");
      }
    });
  }
});
