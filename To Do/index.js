document.addEventListener('DOMContentLoaded', () => {

    const input = document.querySelector('.input')
    const add = document.querySelector('.add')
    const task = document.querySelector('.list')

    add.addEventListener('click', () => {
        if (input.value.trim() !== "") {
            const li = document.createElement('li')
            li.classList.add('item')
            li.innerText = input.value



            const btn = document.createElement('button')
            btn.innerText = '✅'
            btn.classList.add('done')

            btn.addEventListener('click', () => {
                li.classList.toggle('completed')
            });

            li.addEventListener('dblclick', () => {
                task.removeChild(li)
            })

            li.appendChild(btn)
            task.appendChild(li)
            input.value = ""
        }

    })

});