const form = document.querySelector('#form')

function validarForm(event) {
    const target = event.target
    if(!target.checkValidity()) {
        target.classList.add('invalido')
        form.firstName.setCustomValidity('First Name cannot be empty')
        form.lastName.setCustomValidity('Last Name cannot be empty')
        form.email.setCustomValidity('Looks like this is not an email')
        form.password.setCustomValidity('Password cannot be empty')
        target.nextElementSibling.innerText = target.validationMessage
    }

    console.log(target)
}

form.addEventListener('change', validarForm)