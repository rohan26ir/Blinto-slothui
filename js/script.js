let activeAccordion = null;

function toggleAccordion(clickedAccordion) {
    const allAccordions = document.getElementsByClassName("accordion");
    const allPanels = document.getElementsByClassName("panel");

    const isAlreadyActive = clickedAccordion.classList.contains("active");

    // Close all panels
    for (let i = 0; i < allAccordions.length; i++) {
        allAccordions[i].classList.remove("active");
        allPanels[i].style.display = "none";
    }

    // Toggle the clicked one if it wasn't already active
    if (!isAlreadyActive) {
        clickedAccordion.classList.add("active");
        const panel = clickedAccordion.nextElementSibling;
        panel.style.display = "block";
    }
}

function initializeAccordions() {
    const accordions = document.getElementsByClassName("accordion");
    for (let i = 0; i < accordions.length; i++) {
        accordions[i].addEventListener("click", function () {
            toggleAccordion(this);
        });
    }
}

// Initialize on page load
initializeAccordions();
