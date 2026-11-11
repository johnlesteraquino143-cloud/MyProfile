
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

// CERTIFICATE IMAGE PREVIEW
function viewImage(button) {
    const card = button.closest(".certificate-card");
    const image = card.querySelector("img");

    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");

    modalImage.src = image.src;
    modalImage.alt = image.alt;

    modal.classList.add("active");
}

// CLOSE CERTIFICATE PREVIEW
function closeImage() {
    const modal = document.getElementById("imageModal");

    modal.classList.remove("active");
}

// CLOSE WHEN CLICKING OUTSIDE THE IMAGE
document.getElementById("imageModal").addEventListener("click", function(event) {
    if (event.target === this) {
        closeImage();
    }
});

// CLOSE USING ESCAPE KEY
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeImage();
    }
});
