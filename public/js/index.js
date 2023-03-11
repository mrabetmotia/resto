let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let nom = document.getElementById('adminname')
let pass = document.getElementById('passadmin')



menu.onclick = () =>{

    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')

}


window.onscroll = () =>{

    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

}

function admin(){
    if (nom === "Motia" && pass === "123456") {
        window.location("/admin");
    }
    else {
        allert("nom ou password invalid")
    } 

}

