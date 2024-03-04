const form = document.querySelector('#form')
const email = document.querySelector('#email')
const btn = document.querySelector('button')

function validarForm(event) {
    const target = event.target
    if(!target.checkValidity()) {
        target.classList.add('invalido')
        form.firstName.setCustomValidity('First Name cannot be empty')
        form.lastName.setCustomValidity('Last Name cannot be empty')
        form.email.setCustomValidity('Looks like this is not an email')
        form.password.setCustomValidity('Password cannot be empty')
        target.nextElementSibling.innerText = target.validationMessage
        email.value = 'email@example/com'
    }
}

form.addEventListener('change', validarForm)
