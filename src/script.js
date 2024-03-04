const form = document.querySelector('#form')
const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const btn = document.querySelector('button')

function validarForm(event) {
    event.preventDefault()
    const target = event.target

    if (!form.checkValidity()) {
        if (!firstName.checkValidity()) {
            firstName.classList.add('invalido')
            firstName.setCustomValidity('First Name cannot be empty')
            firstName.nextElementSibling.innerText = firstName.validationMessage
        } else {
            firstName.classList.remove('invalido')
            firstName.setCustomValidity('')
            firstName.nextElementSibling.innerText = ''
        }

        if (!lastName.checkValidity()) {
            lastName.classList.add('invalido')
            lastName.setCustomValidity('Last Name cannot be empty')
            lastName.nextElementSibling.innerText = lastName.validationMessage
        } else {
            lastName.classList.remove('invalido')
            lastName.setCustomValidity('')
            lastName.nextElementSibling.innerText = ''
        }

        if (!email.checkValidity()) {
            email.classList.add('invalido')
            email.setCustomValidity('Looks like this is not an email')
            email.nextElementSibling.innerText = email.validationMessage
            email.value = 'email@example.com'
        } else {
            email.classList.remove('invalido')
            email.setCustomValidity('')
            email.nextElementSibling.innerText = ''
        }

        if (!password.checkValidity()) {
            password.classList.add('invalido');
            password.setCustomValidity('Password cannot be empty')
            password.nextElementSibling.innerText = password.validationMessage
        } else {
            password.classList.remove('invalido')
            password.setCustomValidity('')
            password.nextElementSibling.innerText = ''
        }
    }
}

btn.addEventListener('click', validarForm)
