const padres= document.getElementById('padres')

const nieto= document.getElementById('nieto2')

///hijos
console.log(padres.querySelectorAll('div'))
console.log(padres.childNodes)
console.log(padres.firstElementChild)
console.log(padres.lastElementChild)
console.log(padres.lastChild)
console.log(padres.hasChildNodes())
//hermanos

console.log(nieto.nextElementSibling)
console.log(nieto.previousElementSibling)

//padres
console.log(nieto.parentElement.parentElement)//devuelve el elemto hijo


