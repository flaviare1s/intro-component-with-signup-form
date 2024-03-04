const form = document.querySelector('#form')

function validarForm(event) {
    const target = event.target
    if(!target.checkValidity()) {
        target.classList.add('invalido')
        target.nextElementSibling.innerText = target.validationMessage
    }

    console.log(target)
}

form.addEventListener('change', validarForm)