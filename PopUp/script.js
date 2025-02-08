document.addEventListener("DOMContentLoaded", () => {
    let mainDiv = document.querySelector(".mainDiv"); // Select popup container
    let buttons = document.querySelectorAll(".buttons button"); // Select all popup buttons
    let closeButton = document.querySelector(".close"); // Select close button

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove all previous animation classes
            mainDiv.classList.remove("show-top", "show-bottom", "show-left", "show-right", "show");

            // Add new class based on button click
            if (button.id === "buttonPopup1") {
                mainDiv.classList.add("show-top");
            } else if (button.id === "buttonPopup2") {
                mainDiv.classList.add("show-bottom");
            } else if (button.id === "buttonPopup3") {
                mainDiv.classList.add("show-left");
            } else if (button.id === "buttonPopup4") {
                mainDiv.classList.add("show-right");
            }

            // Ensure the popup moves to the center after animation
            setTimeout(() => {
                mainDiv.classList.add("show");
            }, 200); // Wait for the initial transition before centering
        });
    });

    // Hide the popup when the close button is clicked
    closeButton.addEventListener("click", () => {
        mainDiv.classList.remove("show", "show-top", "show-bottom", "show-left", "show-right");
    });
});
