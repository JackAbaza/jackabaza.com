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
        <a href="/index.html" class="nav-link">Home</a>
        <a href="/pages/about.html" class="nav-link">About</a>
        <a href="/pages/book.html" class="nav-link">Book</a>
        <a href="/pages/contact.html" class="nav-link">Contact</a>
        <a href="/pages/blog/post1.html" class="nav-link">Blog</a>
        <a href="/pages/forum.html" class="nav-link">Forum</a>
        <a href="/pages/register.html" class="nav-link">Register</a>
      </nav>
    `;

    // Highlight current page again after insertion
    const currentPath = location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(a => {
      if (a.getAttribute("href").includes(currentPath)) {
        a.classList.add("active");
      }
    });
  }
});

  fetch('nav.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
  });

// assets/js/includes.js

document.addEventListener("DOMContentLoaded", () => {
  const load = (id, file) => {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        document.getElementById(id).innerHTML = data;
      });
  };

  load("head-placeholder", "partials/head.html");

  // Optional secondary head (page-specific), silently skip if missing
  fetch("partials/head-secondary.html")
    .then(res => res.ok ? res.text() : "")
    .then(data => {
      document.getElementById("head-secondary-placeholder").innerHTML = data;
    });

  load("nav-placeholder", "partials/nav.html");
  load("footer-placeholder", "partials/footer.html");
});

