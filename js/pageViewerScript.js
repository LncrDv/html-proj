// List of pages to cycle through
const allPages = [
    "html/button.html",
    "html/page_sacha.html",
    "html/Page_timothey.html"
];

let currentIndex = 0;

document.addEventListener("DOMContentLoaded", () => {
    const currentView = document.querySelector("#current-viewing");
    const iframe = document.querySelector("#pageIframe");
    const prevBtn = document.querySelector("#prevPage");
    const nextBtn = document.querySelector("#nextPage");

    // Function to update iframe and label
    function updateView() {
        iframe.src = allPages[currentIndex];
        const pageName = allPages[currentIndex].split("/").pop();
        currentView.innerText = "Currently viewing: " + pageName;
    }

    // Arrow button events
    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + allPages.length) % allPages.length;
        updateView();
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % allPages.length;
        updateView();
    });

    // Initial load
    updateView();
});
