
const openBtn = document.getElementById('open-menu')


openBtn.addEventListener('click', function openMenu() {

    openBtn.style.display = 'none'
    const menu = document.getElementById('menu-hamb')
    menu.style.display = 'block'

    const closeBtn = document.getElementById('closebtn')
    
    closeBtn.addEventListener('click', function closeMenu(){
        menu.style.display = 'none'

        openBtn.style.display = 'block'
    })
    
}) 


document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
        item.addEventListener("click", function() {
            menuItems.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
        });
    });
});


window.sr = ScrollReveal({reset: true})

sr.reveal('#about-me', { duration: 2000})
sr.reveal('#projetos', { duration: 2000})
sr.reveal('#formacao', { duration: 2000})
sr.reveal('#contato', { duration: 2000})



