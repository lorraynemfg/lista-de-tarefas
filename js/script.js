const input = document.querySelector('input')
const btn = document.querySelector('button')
const container = document.querySelector('.container-tasks')

btn.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (input.value === '') {
        return alert('preencha a tarefa')
    }
    const div = document.createElement('div')
    const span = document.createElement('span')
    const img = document.createElement('img')

    container.appendChild(div)
    div.appendChild(span)
    div.appendChild(img)

    span.textContent = input.value

    img.src = './assets/remove.svg'
    div.classList.add('task')

    input.value = ''

    img.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()

        container.removeChild(div)

    })

})

