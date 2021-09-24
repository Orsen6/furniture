const btn = document.querySelector('.header-inner_btn');
const menu = document.querySelector('.header-inner_menu');

btn.onclick = function(){
    menu.classList.toggle('header-inner_menu--active');
}

const btnFurniture = document.querySelector('.furniture-top_btn');
const menuFurniture = document.querySelector('.furniture-top_list');

btnFurniture.onclick = function(){
    menuFurniture.classList.toggle('furniture-top_list--active');
}