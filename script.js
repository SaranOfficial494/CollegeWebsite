const themeToggle = document.querySelector("#themeToggle");
 
themeToggle.addEventListener("click", function () {
  const darkModeIsOn = document.body.classList.toggle("dark-mode");
 
  if (darkModeIsOn) {
    themeToggle.textContent = "Switch to Light Mode";
    themeToggle.setAttribute("aria-pressed", "true");
  } else {
    themeToggle.textContent = "Switch to Dark Mode";
    themeToggle.setAttribute("aria-pressed", "false");
  }
});
