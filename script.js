// Smooth scroll to a section by selector
function scrollToElement(selector) {
    const el = document.querySelector(selector);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

// Event listeners for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const linkFeatures = document.querySelector('a[href="#features"]');
    const linkAbout = document.querySelector('a[href="#about"]');
    const linkContact = document.querySelector('a[href="#contact"]');

    if (linkFeatures) {
        linkFeatures.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToElement("#features");
        });
    }

    if (linkAbout) {
        linkAbout.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToElement("#about");
        });
    }

    if (linkContact) {
        linkContact.addEventListener("click", (e) => {
            e.preventDefault();
            scrollToElement("#contact");
        });
    }
});
