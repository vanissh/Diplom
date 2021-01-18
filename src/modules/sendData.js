function sendData(){
    let form;

    const popUp = document.querySelector('#thanks'),
        popUpError = document.querySelector('#error'),
        popUpPreloader = document.querySelector('#preloader'),
        consentMes = document.createElement('div');

    consentMes.textContent = 'Необходимо подтвердить согласие на обработку данных!';
    consentMes.classList.add('consent');

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
    };

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

    document.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let target = e.target;

        if(target.matches('#card_order') || target.matches('#banner-form')
                || target.matches('#form1') || target.matches('#form2') || target.matches('#footer_form')){
            form = target;  
        }

        if(form.querySelector('p.personal-data') && !form.querySelector('p.personal-data').querySelector('input').checked){
            console.log(form.querySelector('p.personal-data').querySelector('input'))
            form.append(consentMes);
            return;
        } else {
            if(form.querySelector('.consent')){
                consentMes.remove();
            } 
        }

        const inputs = form.querySelectorAll('input');

        if(form.closest('.popup')){
            console.log(form.closest('.popup'));
            form.closest('.popup').style.display = 'none';
            form.closest('.popup').classList.toggle('active');
        }
        toggle(popUpPreloader);
        
        const formData = new FormData(form);
        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });
        console.log(body);

        inputs.forEach(item => {
            item.value = '';
        });
        if(form.querySelector('p.personal-data')){
            form.querySelector('p.personal-data').querySelector('input').checked = false;
        }
        
        postData(body)
            .then((response) => {
                if(response.status !== 200){
                    throw new Error('status network is not 200');
                }
                toggle(popUpPreloader);
                toggle(popUp);

                setTimeout(() => {
                    if(popUp.classList.contains('active')){
                        toggle(popUp);
                    }    
                }, 3000);
            })
            .catch((error) => {
                toggle(popUpPreloader);
                toggle(popUpError);

                setTimeout(() => {
                    if(popUp.classList.contains('active')){
                        toggle(popUpError);
                    }
                }, 3000);
            });
    });
}

sendData();