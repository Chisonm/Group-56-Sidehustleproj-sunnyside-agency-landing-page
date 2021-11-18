const menuBtn = document.getElementById('menu');
const menuItems = document.querySelector('.menu-items');

menuBtn.addEventListener('click', function toggleMenu(){
    menuItems.classList.toggle('active');
});


