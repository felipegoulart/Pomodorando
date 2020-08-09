// Helper
const $ = document.querySelector.bind(document)
const $all = document.querySelectorAll.bind(document)
function log (variavel) {
    return console.log(variavel)
} 

//Botões
const btnAFazer = $('#botaoAFazer')
const btnFeito = $('#botaoFeito')
const btnAdicionar = $('#botaoAdicionar')
const cancelar = $('#cancelar')

//Divs
const divAFazer = $('#aFazer')
const divfeito = $('#feito')
const divfundoModal = $('#modalAdicionar')
const divtelaModal = $('#telaAdicionar')

// Inicia a página com A Fazer ativo
window.onload = () => {
    divAFazer.classList.remove('hidden')
    btnAFazer.classList.add('ativo')

    btnFeito.classList.remove('ativo')
    divfeito.classList.add('hidden')
}


//funções de estilo
btnAFazer.addEventListener('click', () => {
    divAFazer.classList.remove('hidden')
    btnAFazer.classList.add('ativo')

    btnFeito.classList.remove('ativo')
    divfeito.classList.add('hidden')
})

btnFeito.addEventListener('click', () => {
    divfeito.classList.remove('hidden')
    btnFeito.classList.add('ativo')

    btnAFazer.classList.remove('ativo')
    divAFazer.classList.add('hidden')
})

btnAdicionar.addEventListener('click', () => {
    divfundoModal.classList.remove('hidden')
    divtelaModal.classList.remove('hidden')
})

cancelar.addEventListener('click', () => {
    divfundoModal.classList.add('hidden')
    divtelaModal.classList.add('hidden')
})

