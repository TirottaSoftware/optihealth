var burger = document.querySelector(".burger");
var sidebar = document.querySelector(".sidebar");

burger.addEventListener("click", ()=>{
    sidebar.classList.toggle("hidden");
})

var logo = document.querySelector(".logo");

logo.addEventListener("click", () => {
    window.location.href = './index.html';
})