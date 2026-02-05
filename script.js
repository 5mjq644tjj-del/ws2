// Footer year
(() => {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
})();

// Mobile nav toggle
(() => {
  const btn = document.querySelector(".nav-toggle");
  const nav = document.querySelector("[data-nav]");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    btn.setAttribute("aria-expanded", String(open));
  });

  nav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      nav.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
    });
  });
})();

// Local-only form handler (no backend). Replace with Formspree/Netlify later.
function handleContactSubmit(e){
  e.preventDefault();
  const status = document.getElementById("form-status");
  if (status) status.textContent = "Thanks. Your message is ready to be connected to a backend.";
  e.target.reset();
  return false;
}
