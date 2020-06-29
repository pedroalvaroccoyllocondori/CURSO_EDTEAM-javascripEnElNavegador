const profesores=['alvaro','jose','maria','ramon']
const listaprofesores= document.createElement('ul')
const contenedorprofe=document.getElementById('tabla')

const listaprofefragment= document.createDocumentFragment('')

contenedorprofe.appendChild(listaprofesores)

for(let profesor of profesores){
    const li = document.createElement('li')
    //listaprofesores.appendChild(li)
    listaprofefragment.appendChild(li)
    li.textContent=profesor

}

listaprofesores.appendChild(listaprofefragment)

