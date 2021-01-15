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

        if(target.closest('.open-popup') || 
            (target.closest('.overlay') || target.closest('.close_icon')) &&
                visitForm.classList.contains('active')){
            toggle(visitForm);
        }

        if(target.closest('.callback-btn') || 
                (target.closest('.overlay') || target.closest('.close_icon')) && 
                    callbackForm.classList.contains('active')){
            toggle(callbackForm);
        }

        if(target.closest('.fixed-gift') && target.closest('img') || 
            (target.closest('.overlay') || target.closest('.close_icon')) && 
                gift .classList.contains('active')){
            toggle(gift);

            if(target.closest('.fixed-gift')){
                target.closest('.fixed-gift').remove();
            }
            
        }

    });
}

module.exports = headerActive;