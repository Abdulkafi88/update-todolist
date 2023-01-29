function todo(){
    let newp=document.createElement('li')
    let inputvuale=document.getElementById('input').value
    let textNode=document.createTextNode(inputvuale)
    newp.appendChild(textNode)

    if(inputvuale===''){
        alert('add new task')
    }

    else{
        document.getElementById('list').appendChild(newp)

       
    }

    document.getElementById('input').value=''

    newp.addEventListener('click', function(){
        newp.style.textDecoration='line-through'
        
    })

    newp.addEventListener('dblclick',  function(){
        newp.removeChild(textNode)
    })
}


