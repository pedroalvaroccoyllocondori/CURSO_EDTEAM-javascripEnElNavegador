const post = document.getElementById('post')

const padre = document.getElementById('padre')

const elemento = document.createElement('div')
elemento.id='nuevo'
elemento.textContent='soy el nuevo elemto'


padre.replaceChild(elemento,padre.children[0])// como primer parametro se pone el elementonuevo 
// y como segundo parametro el elemto a remplazar (sacar)
