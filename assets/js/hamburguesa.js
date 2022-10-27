const menu= document.querySelector("#idmenu")
const openMenuBtn= document.querySelector(".openmenu")
const closeMenuBtn= document.querySelector(".closemenu")

function toogleMenu () {
menu.classList.toggle (".menu-opened")
}

openMenuBtn.addEventListener("click", toogleMenu)
closeMenuBtn.addEventListener("click", toogleMenu)
