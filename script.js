document.getElementById("scrollToTop").addEventListener("click", function() {
    scrollToSection("#home-section");
});

document.querySelectorAll('nav a, .cta-button').forEach(function(anchor) {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href");
        scrollToSection(targetId);
    });
});

function scrollToSection(targetId) {
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth"
        });
    }
}