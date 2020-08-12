const adicionar = document.querySelector('#adicionar')
const divCards = document.querySelector('#cardsAFazer')

let id = 0

adicionar.addEventListener('click', () => {
    if(document.querySelector('#nomeTarefa').value.trim() === '') {
        alert('Dê um nome para a tarefa')
    } else if(document.querySelector('#horas').value == 0 && document.querySelector('#minutos').value == 0
        || document.querySelector('#horas').value.trim() == '' && document.querySelector('#minutos').value.trim() == ''){
        alert('Preencha o tempo corretamente')  
    } else {

        let objTarefa  = {
            'divAtividade' : document.createElement('div'),
            'nome' : document.createElement('h2'),
            'divTempoTotal' : document.createElement('div'),
            'img' : document.createElement('img'),
            'textotempo' : document.createElement('h3'),
            'divCiclos' : document.createElement('div'),
            'textoCiclos' : document.createElement('h3'),
        }

        objTarefa.nome.innerText = document.querySelector('#nomeTarefa').value
        objTarefa.horas = document.querySelector('#horas').value == '' ? '0' : document.querySelector('#horas').value,
        objTarefa.minutos = document.querySelector('#minutos').value == '' ? '0' : document.querySelector('#minutos').value,
        objTarefa.img.src = './src/img/relogio.svg'
        objTarefa.tempo = parseInt(objTarefa.horas * 60) + parseInt(objTarefa.minutos)
        objTarefa.textotempo.innerText = `${objTarefa.tempo} min`
        objTarefa.ciclos = Math.ceil(parseInt(objTarefa.tempo) / 25)
        objTarefa.textoCiclos.innerText = `ciclos 1/${objTarefa.ciclos}`
        
        //cria divTarefa


        objTarefa.divAtividade.classList.add('card')
        objTarefa.divTempoTotal.classList.add('tempoTotal')
        objTarefa.divCiclos.classList.add('ciclos')

        id += 1

        objTarefa.divAtividade.id = id
        objTarefa.divAtividade.appendChild(objTarefa.nome)
        objTarefa.divAtividade.appendChild(objTarefa.divTempoTotal)
        objTarefa.divAtividade.appendChild(objTarefa.divCiclos)
        objTarefa.divTempoTotal.appendChild(objTarefa.img)
        objTarefa.divTempoTotal.appendChild(objTarefa.textotempo)
        objTarefa.divCiclos.appendChild(objTarefa.textoCiclos)

        divCards.appendChild(objTarefa.divAtividade)


        //Reseta modal
        divfundoModal.classList.add('hidden')
        divtelaModal.classList.add('hidden')
        document.querySelector('#nomeTarefa').value = ''
        document.querySelector('#horas').value = ''
        document.querySelector('#minutos').value = ''

    }
})

    