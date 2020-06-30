const formu= document.getElementById('formulario')
console.log(formu)
if (formu) {
    formu.addEventListener('submit',() => {
        let ancho= formu.querySelector('#ancho')
        let alto= formu.querySelector('#alto')
        let url= formu.querySelector('#url')

        if (ancho && alto && url ) {
            ancho=ancho.value
            alto=alto.value
            url=url.value
            
        }
        window.open(url,url,`innerWidth=${ancho} ,innerHeight=${alto}`)


    })
}