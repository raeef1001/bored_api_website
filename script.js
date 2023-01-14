
    
setTimeout(() => {
    document.getElementById('first').style.display='none'
    fetch(`http://www.boredapi.com/api/activity/`)
    .then(response=>response.json())
    .then(data=>{
       document.getElementById('name').innerText=`${data.activity}`
       document.getElementById('type').innerText=`Type : ${data.type}`
       document.getElementById('member').innerText=`Participent : ${data.participants}`

        
        
    })
}, 1500);


   









