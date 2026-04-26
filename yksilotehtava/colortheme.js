'use strict'

const button = document.getElementById("themeToggle");

button.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    button.textContent = "🌙";
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    button.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  }
});

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (savedTheme === "dark") {
    button.textContent = "☀️";
  } else {
    button.textContent = "🌙";
  }
} else {
  button.textContent = "🌙";
}
