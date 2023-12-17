//using selectors inside the element
const btns = document.querySelectorAll('.question-btn')
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const question = e.currentTarget.parentElement.parentElement
        question.classList.toggle('show-text')
    })
})
// traversing the dom
