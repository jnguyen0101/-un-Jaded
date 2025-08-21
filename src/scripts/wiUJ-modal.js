function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';

    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal(id) {
    const modal = document.getElementById(id);
    modal.classList.remove('show');

    setTimeout(() => {
        modal.style.display = 'none';
    }, 400);
}

// Close if clicked outside content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            closeModal(modal.id);
        }
    });
};