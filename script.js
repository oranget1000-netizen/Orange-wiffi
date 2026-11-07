// إعدادات الموقع: ضع رقم واتساب الدولي بدون علامة + أو مسافات.
// مثال مغربي: 2126XXXXXXXX
const WHATSAPP_NUMBER = "";

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const whatsappLink = document.getElementById("whatsappLink");
whatsappLink?.addEventListener("click", event => {
  if (!WHATSAPP_NUMBER.trim()) {
    event.preventDefault();
    alert("يرجى إضافة رقم واتساب في ملف script.js أولاً.");
    return;
  }
  event.preventDefault();
  const message = encodeURIComponent("السلام عليكم، أريد الاستفسار عن خدمات ORANGE WIFI.");
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank", "noopener,noreferrer");
});
