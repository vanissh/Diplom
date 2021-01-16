function menu(){

    const burgerMenu = document.querySelector('.menu-button'),
            topMenu = document.querySelector('.top-menu'),
            menuItems = [...document.querySelectorAll('li.scroll')],
            popupMenu = document.querySelector('.popup-menu'),
            box = topMenu.getBoundingClientRect(),
            top = box.top + pageYOffset;

    let clientWidth = document.documentElement.clientWidth;   

    window.addEventListener('resize', () => {

        clientWidth = document.documentElement.clientWidth;
        
        if(clientWidth < 768){
            burgerMenu.style.display = 'flex';
        } else {
            burgerMenu.style.display = 'none'
            topMenu.style.position = 'relative';
        }
    });
    
    window.addEventListener('scroll', () => {
        if(clientWidth < 768){
            const box = topMenu.getBoundingClientRect();

            if(pageYOffset < top){
                topMenu.style.position = 'relative';
            }

            if(box.top < 0){
                topMenu.style.position = 'fixed';
            } 
        } 
    });

    document.addEventListener('click', event => {
        let target = event.target;

        if(target.matches('img[src="images/menu-button.png"]')){
            popupMenu.style.display = 'flex';
        }

        if(target.matches('img[src="images/delete.png"]') ||
            target.matches('a') && target.closest('.popup-menu')){
                popupMenu.style.display = 'none';
        }
    });

    //scrollMenu
    const scrollMenu = () => {
        const scrolling = (id) => {
            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        };

        for(let anchor of menuItems){
                anchor.querySelector('a').addEventListener('click', (e) => {
                    e.preventDefault();
                    const blockID = anchor.querySelector('a').getAttribute('href');
                
                    scrolling(blockID);
                });
        }
    }

    scrollMenu();

} 

module.exports = menu;