




addEventListener('DOMContentLoaded',()=>{
    const formulario=document.getElementById('formu')
    const recordar=document.getElementById('recordar')
    formulario.addEventListener('submit',()=>{
        console.log('he enviado el formulario')
    })
    
    
    recordar.addEventListener('change',e=>{
        if (e.target.checked) {
            console.log('el usuario quiere recordar su contraseña')
        }
        else{
            console.log('el usuario no quiere recordar sus contraseña')
        }
    })
})



