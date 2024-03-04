const form = document.querySelector('#form')

function validarForm(event) {
    const target = event.target

    console.log(target)
}

form.addEventListener('change', validarForm)