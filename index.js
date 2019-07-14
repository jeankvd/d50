function toggleMobileMenu(e) {
  document.querySelector("#menu").classList.toggle("active");
}

/* Toggle Mobile Menu */
document.querySelector(".toggle-menu").addEventListener("click", () => {
  toggleMobileMenu();
});
