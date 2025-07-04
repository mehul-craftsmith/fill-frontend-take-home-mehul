
/*
    This module handles the 'add new page'
    modal and it's backdrop
*/


const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const contextMenu = document.getElementById("context-menu");

const openModal = () => {
    modal.classList.add("open");
    modalBackdrop.classList.add("modal-backdrop");
};

const closeModal = () => {
    modal.classList.remove("open");
    modalBackdrop.classList.remove("modal-backdrop");
};

const openContext = () => {
    contextMenu.classList.add("open");
};

const closeContext = () => {
    contextMenu.classList.remove("open");
};

const buttons = document.querySelectorAll('.page button');

document.addEventListener('click', function (event) {
    const clickedInsideContext = contextMenu.contains(event.target);
    const clickedAnyButton = [...buttons].some(btn => btn.contains(event.target));

    if (!clickedInsideContext && !clickedAnyButton) {
        closeContext();
    }
});


let currentButton = null;

buttons.forEach(button => {
    button.addEventListener('click', (e) => {

        const isSameButton = currentButton === button;
        const isMenuOpen = contextMenu.classList.contains('open');
        if (isSameButton && isMenuOpen) {
            closeContext(); // Close if clicking same button again
            currentButton = null;
            return;
        }
        currentButton = button;

        const rect = button.getBoundingClientRect();

        // Position menu just below the clicked button
        contextMenu.style.position = 'absolute';
        contextMenu.style.top = `${rect.bottom + window.scrollY + 12}px`;
        contextMenu.style.left = `${rect.left + window.scrollX}px`;
        openContext();
    });
});
