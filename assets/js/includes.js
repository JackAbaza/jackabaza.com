// Highlight current nav link
const path = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-link').forEach(link => {
  if (link.getAttribute('href').endsWith(path)) {
    link.classList.add('active');
  }
});
