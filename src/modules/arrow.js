function showArrow(){
    const elem = document.querySelector('.header-main'),
        arrow = document.querySelector('#totop');

    arrow.style.display = 'none';
    document.addEventListener('scroll', function() {
        const elemTop = elem.getBoundingClientRect().top,
            isVisible = (elemTop < -(elem.offsetHeight*0.5));

        if(isVisible){
            arrow.style.display = 'block';
        } else {
            arrow.style.display = 'none';
        }
    });

    const scroll = () => {
        const scrolling = () => {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        };

        arrow.addEventListener('click', (event) => {
            event.preventDefault();
            scrolling();
        });
    }
    scroll();
}

export default showArrow;