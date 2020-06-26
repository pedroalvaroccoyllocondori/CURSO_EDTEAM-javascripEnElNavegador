/* document.querySelectorAll('div').forEach(el =>{
    el.addEventListener('click',e=>{
        console.log(`click en ${e.target.id}`)
        e.stopPropagation()
    })
}) */

const galeria=document.getElementById('galeria')

galeria.addEventListener('click',e=>{
    const objetivo=e.target,
          imagenes= Array.from(galeria.querySelectorAll('img'))
    let numero=imagenes.indexOf(objetivo)
    console.log(`imagem ${numero+1}`)
})


