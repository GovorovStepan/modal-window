function showModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    console.log(modalTimerId);
    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}


function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    const modalBtns = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalBtns.forEach(btn => {
        btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
    });


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            showModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll);

    modal.addEventListener('click', event => {
        if (event.target === modal || event.target.getAttribute('data-close') == '') {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', event => {
        if (event.code === "Escape" && modal.classList.contains('show')) {
            closeModal(modalSelector);
        }
    });

}

export default modal;
export {closeModal};
export {showModal};