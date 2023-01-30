const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}


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


document.getElementById('red').addEventListener('click',abdul)

function abdul(){
    document.querySelector('body').style.background='red'
}


let any=document.getElementById('bule').addEventListener('click', nirig)

function nirig(){
    document.querySelector('body').style.background='blue'
}

let more=document.getElementById('orange').addEventListener('click', yo)

function yo(){
    document.querySelector('body').style.background='orange'
}

let total= 0

document.querySelector('#pumpkin').addEventListener('click', yy)

document.querySelector('#dominosPizza').addEventListener('click', mm)
document.querySelector('#Zebra').addEventListener('click', kk)
document.querySelector('#luffy4').addEventListener('click', nn)

function yy(){
    total=0
    document.querySelector('#placeToputResult').innerText=total
    
}

function mm(){
    total=total+3  
    document.querySelector('#placeToputResult').innerText=total
}

function kk(){
    total= total + 9
    document.querySelector('#placeToputResult').innerText=total
}


function nn(){
    total=total-2
    document.getElementById('placeToputResult').innerText=total
}

