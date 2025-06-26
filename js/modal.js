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

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const rect = button.getBoundingClientRect();

        // Position menu just below the clicked button
        contextMenu.style.position = 'absolute';
        contextMenu.style.top = `${rect.bottom + window.scrollY}px`;
        contextMenu.style.left = `${rect.left + window.scrollX}px`;
        openContext();
    });
});
