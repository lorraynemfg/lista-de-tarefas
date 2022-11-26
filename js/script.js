const input = document.querySelector('input')
const btn = document.querySelector('button')
const container = document.querySelector('.container-tasks')
let verifica = false

btn.addEventListener('click', (event) => {
    event.preventDefault()
    event.stopPropagation()

    if (input.value === '') {
        return alert('preencha a tarefa')
    }
    const div = document.createElement('div')
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const span = document.createElement('span')
    const p = document.createElement('p')
    const img = document.createElement('img')
    const section = document.createElement('section')
    const red = document.createElement('div')
    const orange = document.createElement('div')

    container.appendChild(div)
    div.appendChild(div1)
    div.appendChild(div2)
    div1.appendChild(span)
    div1.appendChild(p)
    div2.appendChild(section)
    div2.appendChild(img)

    section.appendChild(red)
    section.appendChild(orange)

    span.textContent = input.value

    img.src = './assets/remove.svg'
    div.classList.add('task')
    div2.classList.add('div2')
    div1.classList.add('div1')
    red.classList.add('red')
    orange.classList.add('orange')

    input.value = ''

    red.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()

        if (verifica == false) {
            div.style.borderColor = 'red'
            p.style.color = 'red'
            p.textContent = '(***prioridade máxima)'
            verifica = true
        } else {
            div.style.borderColor = 'black'
            p.textContent = ''
            verifica = false
        }

    })

    orange.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()

        if (verifica == false) {
            div.style.borderColor = 'orange'
            p.style.color = 'orange'
            p.textContent = '(**prioridade média)'
            verifica = true
        } else {
            div.style.borderColor = 'black'
            p.textContent = ''
            verifica = false
        }

    })

    img.addEventListener('click', (event) => {
        event.preventDefault()
        event.stopPropagation()

        container.removeChild(div)

    })

})


