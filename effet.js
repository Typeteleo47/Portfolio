const btnMenu = document.getElementById('btn-menu');
const Main = document.querySelector('.menu_hamburger');
const UnMenu = document.querySelector('.partie2')


btnMenu.addEventListener('click', function(){
    Main.style.display = "flex";
});
UnMenu.addEventListener('click', function(){
    Main.style.display = "none";
});