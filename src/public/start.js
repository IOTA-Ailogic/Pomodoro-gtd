const boton = document.getElementById('boton')
const back = document.getElementById('back')

const min = document.getElementById('min')
const sec = document.getElementById('sec')

const done = document.getElementById('done')

const start = ()=>{
    boton.style.background= 'radial-gradient(50% 50% at 50% 50%, #46d2fd7e 0%, #0094c57e 100%)'
    boton.style.boxShadow= '0px 0px 18px 2px #00c3ff6c'
    back.style.display= 'none'

    setInterval(() => {
        if(parseInt(sec.innerHTML) !== 0)
            sec.innerHTML = parseInt(sec.innerHTML) - 1
        else if(parseInt(min.innerHTML) !== 0 && parseInt(sec.innerHTML) == 0){
            min.innerHTML = parseInt(min.innerHTML) - 1
            sec.innerHTML = 60
        }
        else if(parseInt(min.innerHTML) == 0 && parseInt(sec.innerHTML) == 0){
            boton.style.transform = 'scale(0)'
            setTimeout(() => {
                document.getElementById('boton_inicio').style.display = 'none'
            }, 1000);
            setTimeout(() => {
                done.style.display = 'flex'
            }, 1100);
            setTimeout(() => {
                done.style.transform = 'scale(1)'
            }, 1130);
        }
    }, 1000);
}

boton.addEventListener('click', ()=> start())