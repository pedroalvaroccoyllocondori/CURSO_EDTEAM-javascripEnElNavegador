const post = document.getElementById('post')

const postparrafo= post.querySelectorAll('p')

const anuncio = document.createElement('div')


anuncio.id='insertar'
anuncio.textContent='publicidad'


const  obtennermitadhijos=elemento=>{
    const hijos=elemento.children
    const longitud=hijos.length
    const mitad = Math.floor(longitud/2)

    return hijos[mitad]
}
// obtener la mitad de los elemtos
console.log(obtennermitadhijos(post))

const hijomedio=obtennermitadhijos(post)

post.insertBefore(anuncio,hijomedio)