// Modal functionality
document.querySelectorAll('.poster-img').forEach(img => {
    img.addEventListener('click', function(event) {
        event.preventDefault();  // Prevents the image link from opening in a new tab

        // Get the full-size image source from the clicked image
        const fullImageSrc = event.target.src;

        // Create the modal structure
        const modal = document.createElement('div');
        modal.classList.add('modal');

        modal.innerHTML = `
            <span class="close">&times;</span>
            <img class="modal-content" src="${fullImageSrc}" alt="Full view of the poster">
        `;
        
        // Append the modal to the body
        document.body.appendChild(modal);

        // Close the modal when the close button is clicked
        const closeModal = modal.querySelector('.close');
        closeModal.addEventListener('click', () => {
            modal.remove();
        });

        // Show the modal and center it (triggering flexbox centering)
        modal.style.display = 'flex'; // Ensures the modal is centered using flexbox
    });
});
