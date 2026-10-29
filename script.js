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
  const subject = encodeURIComponent("Demande de mise en service — " + form.get("name"));
  const body = encodeURIComponent(
`Bonjour AERION CLIMATE,

Nom / société : ${form.get("name")}
E-mail : ${form.get("email")}
Téléphone : ${form.get("phone") || "Non renseigné"}
Lieu du chantier : ${form.get("location") || "Non renseigné"}

Besoin :
${form.get("message")}

Cordialement,
${form.get("name")}`
  );
  const status = document.querySelector("#form-status");
  status.textContent = "Votre application e-mail va s’ouvrir avec votre demande préremplie.";
  window.location.href = `mailto:aerion.climate1@gmail.com?subject=${subject}&body=${body}`;
});