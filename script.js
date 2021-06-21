var burger = document.querySelector(".burger");
var sidebar = document.querySelector(".sidebar");

burger.addEventListener("click", ()=>{
    sidebar.classList.toggle("hidden");
})