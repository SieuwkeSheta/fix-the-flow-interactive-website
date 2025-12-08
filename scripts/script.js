// Hamburgermenu
const hamMenu = document.querySelector(".ham-menu")
const hamMenuButton = document.querySelector(".ham-menu-button")

hamMenuButton.addEventListener("click", toggleHamMenu)


function toggleHamMenu() {
    hamMenuButton.classList.toggle("is-open")
    hamMenu.classList.toggle("is-open")
}

