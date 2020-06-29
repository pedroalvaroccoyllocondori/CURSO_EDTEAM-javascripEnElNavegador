const post = document.getElementById('post')

const padre = document.getElementById('padre')

const elemento = document.createElement('div')
elemento.id='nuevo'
elemento.textContent='soy el nuevo elemto'

//padre.insertAdjacentElement('beforebegin',elemento)//insercion hermananterior
//padre.insertAdjacentElement('afterend',elemento)// insercion hermana posterior

//padre.insertAdjacentElement('afterbegin',elemento)/// insercion hijo anterior

//padre.insertAdjacentElement('beforeend',elemento)/// insercion hijo anterior

//padre.insertAdjacentText('afterbegin','hola mundo')// insercion de texto

///estos meetodos insert tex funciona con texto  tambn

///************************* */metodo para insertar heml
padre.insertAdjacentHTML('beforebegin',`<h1>soy el titulo</h1>`)


