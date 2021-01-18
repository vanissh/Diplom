function calc(){

    const calcData = {
        'mozaika': {
            '1': 1999,
            '6': 9900,
            '9': 13900,
            '12': 19000,
        },

        'schelkovo':{
            '1': 2999,
            '6': 14990,
            '9': 21990,
            '12': 24990,
        }
    };

    const form = document.querySelector('#card_order-main'),
        time = form.querySelector('.time'),
        timeInput = [...time.querySelectorAll('input')],
        totalPrice = form.querySelector('#price-total'),
        clubs = [...form.querySelectorAll('.club')],
        priceMessage = form.querySelector('.price-message').querySelector('input'),
        clubValue = [];

    let clubKey, timeValue, flag = true, price = 2999;

    clubs.forEach(item => {
        clubValue.push(item.querySelector('input'));
    });
    
    const makeDiscount = () => {
        if(priceMessage.value.toUpperCase() === 'ТЕЛО2020' && flag){
                price *= 0.7;
                totalPrice.textContent = Math.ceil(price, -1);
                flag = false; 
        }
    }

    document.addEventListener('change', () => {
        clubValue.forEach(item => {
            if(item.checked){
                clubKey = item.value;
            }
        });

        timeInput.forEach(item => {
            if(item.checked){
                timeValue = item.value;
            }
        });

        if(clubKey && timeValue){
            price = calcData[clubKey][timeValue];
            totalPrice.textContent = price;
        }
        
        flag = true;
        makeDiscount();

    });  

    document.addEventListener('click', () => {
        makeDiscount();    
    });
}

calc();