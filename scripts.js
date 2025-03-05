// Modal functionality
function openModal(imgSrc) {
    // Remove existing modal if present
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    // Create modal structure
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" src="${imgSrc}" alt="Full view of the poster">
    `;

    // Append modal to body and show it
    document.body.appendChild(modal);
    modal.style.display = 'flex';

    // Close modal on click
    modal.querySelector('.close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// Attach modal functionality to all images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => openModal(img.src));
});

// Carousel functionality
let slideIndex = 0;

function getVisibleSlides() {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 2;
    return 3;
}

function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.querySelector('.carousel-container');
    const visibleSlides = getVisibleSlides();
    const maxIndex = slides.length - visibleSlides;

    slideIndex = Math.max(0, Math.min(slideIndex + n, maxIndex));
    container.style.transform = `translateX(-${slideIndex * (100 / visibleSlides)}%)`;
}

window.addEventListener('resize', () => {
    slideIndex = 0; // Reset index on resize
    moveSlide(0);
});
