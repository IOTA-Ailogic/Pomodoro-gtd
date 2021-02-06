const boton = document.getElementById('boton')

const start = ()=>{
    boton.innerHTML === '25:00'? boton.innerHTML = 'Start': boton.innerHTML = '25:00'
}

boton.addEventListener('click', ()=> start())