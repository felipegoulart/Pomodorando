let btnPlay = document.querySelector('#btnPlay')
let btnStop = document.querySelector('#btnStop')
let min = 25
let seg = 0
let tempo = 1000
let cron
let barra = document.querySelector('#barra-progresso')
let p = 0

console.log(btnPlay);
btnPlay.addEventListener( 'click', () => {
        cron = setInterval(() => { timer() }, tempo)
    })

btnStop.addEventListener( 'click', () => {
        clearInterval(cron)
        min = 25
        seg = 1
        
    })

function barraDeProgresso(min, seg) {
    p += 0.0666
    barra.style.width = `${p}%`
    console.log(p)
}

function timer () {
    seg--
    if(seg < 0) {
        min--
        seg = 59
    }
    if(min == 0 && seg == 0) {
        document.querySelector('#cronometro').innerText = '25:00'
        min = 5
        seg = 0
        p = 0
    }
    barraDeProgresso(min,seg)
    document.querySelector('#cronometro').innerText = `${(min < 10 ? '0' + min : min)}:${(seg < 10 ? '0' + seg : seg)}`
}
