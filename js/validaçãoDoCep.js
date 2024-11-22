var campoCep = document.querySelector('#cep');

campoCep.oninvalid = function () {
    this.setCustomValidity('');

    if (!this.validity.valid) {
        this.setCustomValidity('ops! Tem algo errado neste campo!');
        this.parentNode.classList.add('contatoCampo--erro')
    }
}