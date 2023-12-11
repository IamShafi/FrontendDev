const form = document.getElementById('form')
const inputForm = document.getElementById('email')
const spanError = document.getElementsByClassName('span_error')

form.addEventListener('submit', function (event) {
    event.preventDefault()

    if (inputForm.value === '') {
        spanError[0].innerHTML = 'Email cannot be empty'
        spanError[1].innerHTML = 'Email cannot be empty'
        inputForm.classList.add('input_error')
    } else if (inputForm.value.indexOf("@") < 0) {
        spanError[0].innerHTML = 'Check your email please'
        spanError[1].innerHTML = 'Check your email please'
    } else {
        alert('Email has been registered')
        inputForm.value = ''
        spanError[0].innerHTML = ''
        spanError[1].innerHTML = ''
        inputForm.classList.remove('input_error')
    }

})






