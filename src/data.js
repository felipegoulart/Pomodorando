const adicionar = $('#adicionar')

adicionar.addEventListener('click', () => {
    const objTarefa = {
        'tarefa' : $('#nomeTarefa').value,
        'horas' : $('#horas').value,
        'minutos' : $('#minutos').value
    }
    
    divfundoModal.classList.add('hidden')
    divtelaModal.classList.add('hidden')
    
    log(objTarefa)
})
