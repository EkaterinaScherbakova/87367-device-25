;(function() {
    var open = document.getElementById('contact-us-button');
    var modal = document.getElementById('contact-us-modal');
    var close = modal.querySelector('.modal-close');
    var form = modal.querySelector('form');
    var name = form.querySelector('[name=name]');
    var submit = form.querySelector('[type=submit]');

    open.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.add('show');
        name.focus();
    });

    close.addEventListener('click', closeModal);

    submit.addEventListener('click', function (evt) {
        form.classList.add('submitted');
    });

    window.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27 && modal.classList.contains('show')) {
            if (modal.classList.contains('show')) closeModal(evt);
        }
    });

    function closeModal(evt) {
        evt.preventDefault();
        modal.classList.remove('show');
        form.classList.remove('submitted');
    }
})()

;(function() {
    var open = document.getElementById('map-link');
    var modal = document.getElementById('map-modal');
    var close = modal.querySelector(".modal-close");

    open.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.add('show');
    });

    close.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.remove("show");
    });
})()