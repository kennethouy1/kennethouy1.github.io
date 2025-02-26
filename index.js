document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("darkModeToggle");
    const body = document.body;

    // Check for stored user preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleSwitch.checked = true; // Ensure toggle switch is in the correct position
    }

    // Toggle dark mode on slider click
    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
        } else {
            body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});