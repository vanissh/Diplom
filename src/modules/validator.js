function validator(){
    const inputs = [...document.querySelectorAll('input')];

    document.addEventListener('input', (event)=> {
        let target = event.target;

        inputs.forEach(item => {
            if(item === target){
                if(target.matches('.name')){
                    item.value = item.value.replace(/[^а-яё\s]/ig, '');
                } else if (target.matches('.phone')){
                    item.value = item.value.replace(/[^\d \-\+]/ig, '');
                }
            } else {
                return;
            }
        })
    })
    
}

validator();