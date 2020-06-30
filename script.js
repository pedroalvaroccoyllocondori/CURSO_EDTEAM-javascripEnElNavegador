const  plantilla= document.getElementById('plantilla')

const miplatillanueva= plantilla.content.cloneNode(true)
miplatillanueva.querySelector('h2').textContent='edteam'
miplatillanueva.querySelector('p').textContent='tu futuro te esta esperando'

document.getElementById('contenido').appendChild(miplatillanueva)