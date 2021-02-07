/*
const boton = document.getElementById('boton')

const start = ()=>{
    boton.innerHTML === '25:00'? boton.innerHTML = 'Start': boton.innerHTML = '25:00'
}

boton.addEventListener('click', ()=> start())

*/

const minuto = document.getElementById('minuto_up')

const hora = ()=> {
    document.getElementById('minuto').innerHTML = parseInt(document.getElementById('minuto').innerHTML) + 1
}

minuto.addEventListener('click',()=> hora())