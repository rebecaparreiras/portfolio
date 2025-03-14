// Slider nav
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".page");
    const navLinks = document.querySelectorAll(".slider-nav a");

    // Add/remove 'active'
    function highlightNav(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // If the page is visible, updates nav
                const sectionId = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // IntersectionObserver
    const observer = new IntersectionObserver(highlightNav, {
        threshold: 0.5, // Garantees 50% of page visible
    });

    // Observes each page
    sections.forEach(section => {
        observer.observe(section);
    });
});





