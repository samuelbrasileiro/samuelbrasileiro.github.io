// Keep the site usable with JavaScript disabled.
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());
