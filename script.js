

const ahora = new Date()
console.log(ahora)
const aniversario=new Date(2000,4,21,20,30,12)
console.log(aniversario)


const diferenciadezonahoraria= new Date().getTimezoneOffset()
console.log(diferenciadezonahoraria)


const nacimiento= new Date(1994,10,16)
const actual=new Date(2020,5,2)

console.log(actual-nacimiento)


const obtenersegundos=ms=>Math.round(ms/1000)
const obtenerminutos=mm=>Math.floor(mm/60)

console.log(obtenerminutos(actual-nacimiento))