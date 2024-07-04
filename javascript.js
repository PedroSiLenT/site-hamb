const btn = document.querySelector('.btn-h')
const menu = document.querySelector('.menu-lateral')
const btnClose = document.querySelector('.btn-closed')

btn.addEventListener('click', () => {
    menu.classList.toggle('open')
})

btnClose.addEventListener('click', () => {
    menu.classList.remove('open')
})

function teste () {
    console.log('teste')
}

document.querySelector('.btn-h').addEventListener('click', function (event) {
    event.preventDefault()
})

document.querySelector('.btn-closed').addEventListener('click', function (event) {
    event.preventDefault()
})

let botao = document.querySelector('#btnTopo')

window.onscroll = function () {
    scrollFunction()
}

function scrollFunction () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        botao.style.display = 'block'
    } else {
        botao.style.display = 'none'
    }
}

function backTopo () {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}