function onOff(choice) {
    offPreviousToggled();
    const btn = document.querySelector(`.btn-${choice}`);
    btn.classList.contains('is-toggled') ? btn.classList.remove('is-toggled') : btn.classList.add('is-toggled');
}

function offPreviousToggled() {
    const btn = document.querySelector('.is-toggled');
    if (btn) {
        btn.classList.remove('is-toggled');
    }
}