document.querySelectorAll('div').forEach(el =>{
    el.addEventListener('click',e=>{
        console.log(`click en ${e.target.id}`)
        e.stopPropagation()
    })
})