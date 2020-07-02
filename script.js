
setInterval(()=>{
    const relog=document.getElementById('relog')
    if (relog) {
        relog.textContent=new Date().toLocaleTimeString()
    }

},1000)
