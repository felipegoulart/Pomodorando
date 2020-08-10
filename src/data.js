const adicionar = $('#adicionar')
const divCards = $('#cardsAFazer')

/* <h2 class="nomeAtividade">Teste</h2>
    <div class="tempoTotal">
        <img src="./src/img/relogio.svg">
        <h3>120min</h3>
    </div>
    <div class="ciclos">
        <h3>ciclos 1/5</h3>
    </div> */

const criarDivAtividade = function (tarefa) {
    let divAtividade = document.createElement('div')
    let h2NomeTarefa = document.createElement('h2')
    let divTempoTotal = document.createElement('div')
    let img = document.createElement('img')
    let h3Tempo = document.createElement('h3')
    let divCiclos = document.createElement('div')
    let h3Ciclos = document.createElement('h3')

    let id = 0

    divAtividade.classList.add('card')
    divTempoTotal.classList.add('tempoTotal')
    divCiclos.classList.add('ciclos')

    img.src = './src/img/relogio.svg'

    h2NomeTarefa.innerText = tarefa.nome
    h3Tempo.innerText = `${tarefa.tempo} min`
    h3Ciclos.innerText = `ciclos 1/${tarefa.ciclos}`
    
    id += 1

    divAtividade.id = id
    divAtividade.appendChild(h2NomeTarefa)
    divAtividade.appendChild(divTempoTotal)
    divAtividade.appendChild(divCiclos)
    divTempoTotal.appendChild(img)
    divTempoTotal.appendChild(h3Tempo)
    divCiclos.appendChild(h3Ciclos)

    divCards.appendChild(divAtividade)

}

adicionar.addEventListener('click', () => {
    if($('#nomeTarefa').value.trim() === '') {
        alert('Dê um nome para a tarefa')
    } else if($('#horas').value == 0 && $('#minutos').value == 0
        || $('#horas').value.trim() == '' && $('#minutos').value.trim() == ''){
        alert('Preencha o tempo corretamente')  
    } else {
        const objTarefa = {
            'nome' : $('#nomeTarefa').value,
            'horas' : $('#horas').value == '' ? '0' : $('#horas').value,
            'minutos' : $('#minutos').value == '' ? '0' : $('#minutos').value,
        }
        
        objTarefa.tempo = parseInt(objTarefa.horas * 60) + parseInt(objTarefa.minutos)
        objTarefa.ciclos = Math.ceil(parseInt(objTarefa.tempo) / 25)
        
        divfundoModal.classList.add('hidden')
        divtelaModal.classList.add('hidden')
        $('#nomeTarefa').value = ''
        $('#horas').value = ''
        $('#minutos').value = ''

        criarDivAtividade(objTarefa)

    }
})

    