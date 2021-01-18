function headerActive (){

    const show = (elem) => {
        if(elem.classList.contains('active')){
            elem.style.display = 'block';
        } else {
            elem.style.display = 'none';
        }
    }
    const toggle = (elem) => {
        elem.classList.toggle('active');
        show(elem);
    }

    document.addEventListener('click', event => {
        let target = event.target;

        const clubList = document.querySelector('.clubs-list').querySelector('ul'),
                visitForm = document.getElementById('free_visit_form'),
                callbackForm = document.getElementById('callback_form'),
                gift = document.getElementById('gift');


        if(target.closest('.club-select') && target.closest('p')){
            toggle(clubList);
        }

        if(target.closest('.open-popup')){
            toggle(visitForm);
        }

        if(target.closest('.callback-btn-header')){
            toggle(callbackForm);
        }

        if(target.closest('.fixed-gift') && target.closest('img')){
            toggle(gift);

            if(target.closest('.fixed-gift')){
                target.closest('.fixed-gift').remove();
            } 
        }

        if(target.closest('.popup') && target.closest('.popup').classList.contains('active') &&
            (target.closest('.overlay') || target.closest('.close_icon') ||
                target.closest('.close-btn'))){

            toggle(target.closest('.popup')); 
        }
    });
}

export default headerActive;