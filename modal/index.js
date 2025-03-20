const openModalButton = document.querySelector('.btn-open-modal');
const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const modalNoButton = document.querySelector('.btn--secondary');
const modalYesButton = document.querySelector('.btn-yes-button')

openModalButton.addEventListener('click', function () {
    modal.style.display= 'flex';
    openModalButton.style.display= 'none';
    body.style.backgroundColor= 'var(--color-purple-dark)'
})

modalNoButton.addEventListener('click', function () {
    modal.style.display = 'none'; 
    body.style.backgroundColor = ''; 
    openModalButton.style.display = 'block'; 
});

modalYesButton.addEventListener('click', function() {
    modal.style.display= 'none';
})
