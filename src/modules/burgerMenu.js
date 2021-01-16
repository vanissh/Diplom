function menu(){

    const burgerMenu = document.querySelector('.menu-button');
    const topMenu = document.querySelector('.top-menu');
    let clientWidth = document.documentElement.clientWidth;   

    window.addEventListener('resize', () => {
        clientWidth = document.documentElement.clientWidth;
        if(clientWidth < 768){
            burgerMenu.style.display = 'flex';
        } else {
            burgerMenu.style.display = 'none'
        }
    });
    
    window.addEventListener('scroll', () => {
        if(clientWidth < 768){

            if(pageYOffset < 240){
                topMenu.style.position === 'relative';
            }
            if(pageYOffset >= 240){
                topMenu.style.position = 'fixed';
            } 

        } 
    }) 
    
} 

module.exports = menu;