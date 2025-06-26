
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

const btn = document.getElementById("open-context-btn");
document.addEventListener('click', function (event) {
    if (!contextMenu.contains(event.target) && !btn.contains(event.target)) {
        closeContext();
    }
});
