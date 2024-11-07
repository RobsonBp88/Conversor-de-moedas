
function generateNumber() {

    const min = Math.ceil(document.querySelector('.primeiro').value)

    const max = Math.floor(document.querySelector('.segundo').value)

    if (min >= max) {

        alert('O valor mínimo deve ser maior que o valor máximo')

    }

    else {

        const result = Math.floor(Math.random() * (max - min + 1)) + min;

        alert(result)

    }
}