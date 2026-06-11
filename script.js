const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelectorAll(".site-nav a");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
