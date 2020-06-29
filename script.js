const post = document.getElementById('post')

const padre = document.getElementById('padre')

const elemento = document.createElement('div')
elemento.id='nuevo'
elemento.textContent='soy el nuevo elemto'



padre.before(elemento)// hermano anterior
padre.after(elemento)//hermano posterior

padre.prepend(elemento)// primer hijo
padre.append(elemento)//ultimo  hijo



padre.children[0].replaceWith(elemento)