const menu= document.querySelector("#idmenu ol")
const openMenuBtn= document.querySelector(".openmenu")
const closeMenuBtn= document.querySelector(".closemenu")

function toogleMenu () {
menu.classList.toggle ("menu_opened")
}

openMenuBtn.addEventListener("click", toogleMenu)
closeMenuBtn.addEventListener("click", toogleMenu)
