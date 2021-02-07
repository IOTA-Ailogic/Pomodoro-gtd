const minuto_u = document.getElementById('minuto_up')
const sec_u = document.getElementById('sec_up')

const hora_u = (input)=> {

    if(document.getElementById(input).value < 60)
        document.getElementById(input).value = parseInt(document.getElementById(input).value) + 1
    else
        document.getElementById(input).value = 1
}

minuto_u.addEventListener('click',()=> hora_u('minuto'))
sec_u.addEventListener('click', ()=> hora_u('sec'))


const minuto_d = document.getElementById('minuto_down') 
const sec_d = document.getElementById('sec_down')

const hora_d = (input)=> {

    if(document.getElementById(input).value > 0)
        document.getElementById(input).value = parseInt(document.getElementById(input).value) - 1

}

minuto_d.addEventListener('click', ()=> hora_d('minuto'))
sec_d.addEventListener('click', ()=> hora_d('sec'))