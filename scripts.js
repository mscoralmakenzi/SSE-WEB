let slideIndex = 0;

// Get the number of visible slides based on the screen width
function getVisibleSlides() {
    if (window.innerWidth < 480) return 1;  // 1 slide on small screens
    if (window.innerWidth < 768) return 2;  // 2 slides on medium screens
    return 3;  // 3 slides on large screens
}

// Function to move the slide based on the index
function moveSlide(n) {
    const slides = document.querySelectorAll('.carousel-slide');
    const container = document.querySelector('.carousel-container');
    const visibleSlides = getVisibleSlides();
    const slideWidth = slides[0].offsetWidth; // Get the width of one slide
    const maxIndex = slides.length - visibleSlides;

    slideIndex = (slideIndex + n) % (maxIndex + 1);  // Ensure the slideIndex loops back to 0
    if (slideIndex < 0) slideIndex = maxIndex;  // Handle negative slideIndex

    // Apply the translation to center the carousel
    container.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Function to update the width of the carousel container based on visible slides
function updateCarouselContainerWidth() {
    const container = document.querySelector('.carousel-container');
    const visibleSlides = getVisibleSlides();
    const slideWidth = 100 / visibleSlides;  // Percentage width of each slide
    container.style.width = `${(document.querySelectorAll('.carousel-slide').length * slideWidth)}%`;
}

// Add resize event listener to adjust carousel behavior on window resize
window.addEventListener('resize', () => {
    updateCarouselContainerWidth();  // Update the carousel container width
    slideIndex = 0;  // Reset the index to 0
    moveSlide(0);    // Reposition the carousel to the start
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        moveSlide(-1);  // Move to previous slide
    } else if (event.key === 'ArrowRight') {
        moveSlide(1);  // Move to next slide
    }
});

// Call the function initially to set up the correct width
updateCarouselContainerWidth();

// Modal functionality (unchanged)
function openModal(imgSrc) {
    const existingModal = document.querySelector('.modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
        <span class="close">&times;</span>
        <img class="modal-content" src="${imgSrc}" alt="Full view of the poster">
    `;
    document.body.appendChild(modal);
    modal.style.display = 'flex';

    modal.querySelector('.close').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => openModal(img.src));
});
