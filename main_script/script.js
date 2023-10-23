const menuMobile = document.querySelector("#menu_mobile")
const closeMenuMobile = document.getElementById("close_menu_mobile")
const listaLinks = document.querySelector("#lista_links")

menuMobile.addEventListener("click", (evt)=>{
    closeMenuMobile.style.display = "inline-block"
    listaLinks.style.display = "flex"
    menuMobile.style.display = "none"
})
closeMenuMobile.addEventListener("click", (evt)=>{
    menuMobile.style.display = "inline-block"
    listaLinks.style.display = "none"
    closeMenuMobile.style.display = "none"
})
