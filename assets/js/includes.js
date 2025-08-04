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



    // Highlight current page
    const path = location.pathname.split("/").pop();
    document.querySelectorAll("nav a").forEach(a => {
      if (a.getAttribute("href").includes(path)) {
        a.classList.add("active");
      }
    });
  }
});
