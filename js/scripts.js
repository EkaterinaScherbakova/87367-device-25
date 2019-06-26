;(function() {
    var open = document.getElementById('contact-us-button');
    var modal = document.getElementById('contact-us-modal');
    var close = modal.querySelector(".modal-close");
    var name = modal.querySelector('[name=name]')

    open.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.add('show');
        name.focus();
    });

    close.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.remove("show");
    });
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