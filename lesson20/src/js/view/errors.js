
export function showErrorMessage(message, elem) {
    const errorMessage = `<div class="invalid-feedback d-block">${message}</div>`;
    elem.classList.add('is-invalid');
    elem.parentElement.insertAdjacentHTML('beforeend', errorMessage);
}

export function removeErrorMessage(elem) {
    const parent = elem.parentElement;
    const error = parent.querySelector('.invalid-feedback');
    if (!error)return;
    elem.classList.remove('is-invalid');
    error.remove();
}
