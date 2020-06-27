
const padres = document.getElementById('padres')
const hijos=Array.from(padres.children)
const hijospapas=hijos.filter(hijos=>hijos.children.length>0)[0]

const nietos=Array.from(hijospapas.children)
const nieto3=hijos.filter(hijos=>hijos.textContent.trim()==='nieto3')[0]



const nuevoelemento= document.createElement('h2')
nuevoelemento.textContent='soy el elemto a agregar'


hijospapas.insertBefore(nuevoelemento,nieto3)

