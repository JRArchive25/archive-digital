// ARCHIVE DIGITAL - SITE SETTINGS
// Before using the contact form, replace the email below with an inbox you own.
// The form opens the visitor's email application; it DOES NOT send or store data.
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("#site-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Open navigation menu");
  }));
}

const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());

const form = document.getElementById("contact-form");
if (form) form.addEventListener("submit", event => {
  event.preventDefault();
  const feedback = document.getElementById("form-feedback");
  if (CONTACT_EMAIL === "YOUR_EMAIL@example.com" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(CONTACT_EMAIL)) {
    feedback.textContent = "Site owner: add your email address to CONTACT_EMAIL in script.js to activate this feature.";
    return;
  }
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const service = document.getElementById("contact-service").value;
  const message = document.getElementById("contact-message").value.trim();
  const subject = encodeURIComponent(`Archive Digital Inquiry: ${service}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\nMessage:\n${message}`);
  feedback.textContent = "Opening your email app. Review the message and press Send there.";
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});
