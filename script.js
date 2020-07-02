

let contador=0

setTimeout(()=>{
    alert('hola mundo')
},3000)///tiempo en milisegundos

//varias acciones

const saludarmuchasveces=setInterval(()=>{
    contador++
    if (contador>1) {
        console.log(`hola ${contador} veces`)
        
    }
    else{
        console.log(`hola ${contador} vez`)

    }
    if(contador==2){
        clearInterval(saludarmuchasveces)

    }
},1000)///tiempo en milisegundos

console.log(new Date().toLocaleString())
console.log(new Date().toString())

