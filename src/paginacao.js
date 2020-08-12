// Helper

//Botões
const btnAFazer = document.querySelector('#botaoAFazer')
const btnFeito = document.querySelector('#botaoFeito')
const btnAdicionar = document.querySelector('#botaoAdicionar')
const cancelar = document.querySelector('#cancelar')

//Divs
const divAFazer = document.querySelector('#aFazer')
const divfeito = document.querySelector('#feito')
const divfundoModal = document.querySelector('#modalAdicionar')
const divtelaModal = document.querySelector('#telaAdicionar')

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

