const modal = document.querySelector('.modal-container');
const openModalButton = document.querySelector('.button');
const closeModalButton = document.querySelector('.close-modal');

openModalButton.addEventListener('click', () => {
    modal.classList.add('visible');
})

closeModalButton.addEventListener('click', () => {
    modal.classList.remove('visible');
})