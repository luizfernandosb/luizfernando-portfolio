
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





