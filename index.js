const menu = document.getElementById("menu");
const closeIcon = document.getElementById("close");
const navButtons = document.querySelectorAll(".nav-buttons");
const nav = document.querySelector(".header-navigation");


menu.addEventListener("click", ()=>{
    menu.classList.add("inactive");
    closeIcon.classList.add("active");
    nav.classList.add("active");
})

closeIcon.addEventListener("click", ()=>{
    menu.classList.remove("inactive");
    closeIcon.classList.remove("active");
    nav.classList.remove("active");
})

navButtons.forEach((e)=>{
    e.addEventListener("click", ()=>{
        menu.classList.remove("inactive");
        closeIcon.classList.remove("active");
        nav.classList.remove("active");
    })
})