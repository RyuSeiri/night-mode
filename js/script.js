const nightModeToggle = document.getElementById("nightModeToggle");
const content = document.querySelector(".content");

nightModeToggle.addEventListener("click", () => {
    content.classList.toggle("night-mode");
});
