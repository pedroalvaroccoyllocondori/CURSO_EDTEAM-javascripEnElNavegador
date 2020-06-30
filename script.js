const titulo= document.querySelector('h1')
const descripcion= document.querySelector('p')

titulo.style.color='blue'
titulo.style.backgroundColor='aqua'

const mediabp= matchMedia('(max-width: 640px) and (orientation:portrait)')
console.log(mediabp.matches)

const cambiarcolor=()=>{
    if (mediabp.matches) {
        document.body.style.background='red'
    }else{
        document.body.style.background='aqua'
    }

}
addEventListener('resize',cambiarcolor)// se aplica cuando cambia el tamaño
addEventListener('DOMContentLoaded',cambiarcolor)// se aplica cuando se carga el dom

console.log(getComputedStyle(titulo).fontSize)
console.log(getComputedStyle(document.body).fontSize)
console.log(getComputedStyle(document.body).position)
console.log(getComputedStyle(document.body).display)//valores asignados por defecto


//$0.getBoundingClientRect() da las propiedades de valor del elemto tamañoa lato largo .etc
///del archivo dibujado en el dom


//$0.naturalHeight//altura del archivo real
//$0.naturalWidth// ancho del archivo real














/* //metodo sin match media
if (window.innerWidth>640) {
    document.body.style.backgroundColor='yellow'
} */
