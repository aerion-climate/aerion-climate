const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navigation");
toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
}));
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#contact-form")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const subject = encodeURIComponent("Demande de mise en service â€” " + form.get("name"));
  const body = encodeURIComponent(
`Bonjour AERION CLIMATE,

Nom / sociÃ©tÃ© : ${form.get("name")}
E-mail : ${form.get("email")}
TÃ©lÃ©phone : ${form.get("phone") || "Non renseignÃ©"}
Lieu du chantier : ${form.get("location") || "Non renseignÃ©"}

Besoin :
${form.get("message")}

Cordialement,
${form.get("name")}`
  );
  const status = document.querySelector("#form-status");
  status.textContent = "Votre application e-mail va sâ€™ouvrir avec votre demande prÃ©remplie.";
  window.location.href = `mailto:aerion.climate1@gmail.com?subject=${subject}&body=${body}`;
});
