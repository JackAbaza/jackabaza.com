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
  <ul style="list-style: none; padding: 0; margin: 0; display: flex; justify-content: center; flex-wrap: wrap; gap: 0.5rem;">
    <li><a href="/index.html" class="nav-link">Home</a></li>
    <li><a href="/pages/about.html" class="nav-link">About</a></li>
    <li><a href="/pages/book.html" class="nav-link">Book</a></li>
    <li><a href="/pages/contact.html" class="nav-link">Contact</a></li>
    <li><a href="/pages/blog/post1.html" class="nav-link">Blog</a></li>
    <li><a href="/pages/forum.html" class="nav-link">Forum</a></li>
    <li><a href="/pages/register.html" class="nav-link">Register</a></li>
  </ul>
</nav>    `;

