


let x=0, y=0

addEventListener('keyup',e=>{


const pelota= document.getElementById('ball')


const movimiento=direccion=>{
    switch (direccion) {
        case 'arriba':
            y--    
        break;
        case 'abajo':
            y++    
        break;
        case 'derecha':
            x++    
        break;
        case 'izquierda':
            x--    
        break;
    
        default:
            break;
    }
    pelota.style.transform=`translate(${x*10}px,${y*10}px)`
}
switch (e.key) {
        case 'ArrowUp':
            movimiento('arriba')
            break;
        case 'ArrowDown':
            movimiento('abajo')
            break;
        case 'ArrowLeft':
            movimiento('izquierda')
            break;
        case 'ArrowRight':
            movimiento('derecha')
            break;
    
        default:
            break;
}
})


/* 
function hola(){
    alert('hola  mundo')
}

const titulo= document.querySelector('h1')

console.log(titulo.textContent)
console.log(titulo.innerHTML)
console.log(titulo.outerHTML)






 */


/* const titulos =document.getElementById('oa')

const holamundo=e=>console.log(e.target.textContent)
const menucontextual=()=>{
    const menu=document.createElement('div')
    menu.textContent='hola  spy un menu'
    document.body.appendChild(menu)

    menu.style.padding='1em'
    menu.style.background='yellow'
    menu.style.position='fixed'
    menu.style.top=`${e.pageY}px`
    menu.style.left=`${e.pageX}px`

}
titulos.addEventListener('contextmenu',e=>{
    menucontextual(e)
    console.log(e.pageX,e.pageY)
    e.preventDefault()
})

 */




/* titulo.textContent='hola a todos'
titulo.innerHTML='hola a todos  <em>mis amigos</em>'

////////////////////////////////////
const profesor = document.createElement('h2')
profesor.textContent='josue zavala'
profesor.classList.add('teachhher')
profesor.id='teacherjavascript'
/////////////////////////////////////////////////
const profesorcaja=document.getElementById('teacher')

if (profesorcaja) {
    profesorcaja.querySelector('span').appendChild(profesor)
    
}

document.querySelector('button').addEventListener('click',holamundo)


const holamundo=e=>console.log(e.target.textContent)
profesor.addEventListener('dblclick',holamundo)
 */





/* const nodo=document.querySelectorAll('li')
for(let el of nodo){

    if(el.textContent.trim().toUpperCase()==='FLORI'){
        el.remove()
    }
} */









/* 

const nodo=Array.from(document.querySelectorAll('li'))

nodo.map(el=>{
    if(el.textContent.trim().toUpperCase()==='NINA'){
        el.remove()
    }
})
 */

