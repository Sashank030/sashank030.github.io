
showHome();

function showHome() {
    document.getElementById("title").innerText = "Welcome to My Website";
    document.getElementById("content").innerHTML = "<p>This is the home page content.</p>";
}

function showAbout() {
    document.getElementById("title").innerText = "About Us";
    document.getElementById("content").innerHTML = "<p>We are a small team dedicated to creating amazing websites.</p>";
}

function showContact() {
    document.getElementById("title").innerText = "Contact Us";
    document.getElementById("content").innerHTML = `
        <address>
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
            <p>Phone: +1 (123) 456-7890</p>
        </address>
    `;
}
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

const scrollToTopButton = document.getElementById("scroll-to-top");
if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", () => {
        scrollToSection("header");
    });

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            scrollToTopButton.style.display = "block";
        } else {
            scrollToTopButton.style.display = "none";
        }
    });
}
