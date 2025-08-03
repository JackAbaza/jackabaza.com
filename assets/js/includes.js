// Highlight current nav link
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href').endsWith(path)) {
    link.classList.add('active');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("nav-placeholder").innerHTML = `
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
  
  // Highlight current page
  const path = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.href.includes(path)) link.classList.add("active");
  });
});
