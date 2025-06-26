
const modal = document.getElementById("modal");
const modalBackdrop = document.getElementById("modal-backdrop");


const openModal = () => {
    modal.classList.add("open");
    modalBackdrop.classList.add("modal-backdrop");
};
const closeModal = () => {
    modal.classList.remove("open");
    modalBackdrop.classList.remove("modal-backdrop");
};
