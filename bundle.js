(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

const headerActive = require('./modules/headerActive');
const slider = require('./modules/sliders');

headerActive();

slider();
},{"./modules/headerActive":2,"./modules/sliders":3}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
'use strict';

function slider(){

class Slider {

    constructor(main, slide, button){
        this.currentSlide = 0;
        this.container = document.querySelector(main);
        this.slide = [...this.container.querySelectorAll(slide)];
        this.interval;
        this.dot = [...document.querySelectorAll(button)];
    };

    noDisplay (){
        for(let i = 1; i < this.slide.length; i++){
            this.slide[i].style.display = 'none';
        }
        this.dot[0].classList.add('slick-active');
    }

    show (elem, strClass){
        if(elem.classList.contains(strClass)){
            elem.style.display = 'flex';
        } else {
            elem.style.display = 'none';
        }
    };

    prevSlide(elem, index, strClass){
        if(elem[index]){
            elem[index].classList.remove(strClass);
            if(elem === this.slide){
                this.show(elem[index], strClass);
            }
        }     
    };

    nextSlide(elem, index, strClass){
        if(elem[index]){
            elem[index].classList.add(strClass);
            if(elem === this.slide){
                this.show(elem[index], strClass);
            }
        }
        
    };

    autoPlay(){

        this.prevSlide(this.slide, this.currentSlide, 'active');
        this.prevSlide(this.dot, this.currentSlide, 'slick-active');
        this.currentSlide++;
        if(this.currentSlide >= this.slide.length){
            this.currentSlide = 0;
        }
        this.nextSlide(this.slide, this.currentSlide, 'active');
        this.nextSlide(this.dot, this.currentSlide, 'slick-active');

    };

    startSlide(){
        this.interval = setInterval(this.autoPlay.bind(this), 3000);
    };

    stopSlide(){
        clearInterval(this.interval);
    };

    eventListeners(){

        this.container.addEventListener('click', (e) => {
            e.preventDefault();

            let target = e.target;

            this.prevSlide(this.slide, this.currentSlide, 'active');
            this.prevSlide(this.dot, this.currentSlide, 'slick-active');

            if(target.closest('.slider-arrow.next')){

                this.currentSlide++;
            } else if (target.closest('.slider-arrow.prev')){

                this.currentSlide--;
            } else if(target.closest('li')){
                this.dot.forEach((elem, index) => {
                    if (elem === target.closest('li')){
                        this.currentSlide = index;
                    }
                });
            }

            if(this.currentSlide >= this.slide.length){
                this.currentSlide = 0;
            } else if (this.currentSlide < 0){
                this.currentSlide = this.slide.length - 1;
            }

            this.nextSlide(this.slide, this.currentSlide, 'active');
            this.nextSlide(this.dot, this.currentSlide, 'slick-active');
        }); 

        this.container.addEventListener('mouseover', (e) => {

            if(e.target.closest('span') ||
            e.target.closest('button')){
                this.stopSlide();
            }
        });

        this.container.addEventListener('mouseout', (e) => {

            if(e.target.closest('span') ||
            e.target.closest('button')){
                this.startSlide();
            }
        });
    }
}

//1 слайдер

const headSlider = new Slider('.head-slider', '.slide');
headSlider.startSlide();

// 2 слайдер

const servSlider = new Slider('.head-slider', '.slide');

// 3 слайдер
    
const gallerySlider = new Slider('.gallery-slider', '.slide', 'ul.slider-dots li');

gallerySlider.noDisplay();
gallerySlider.startSlide();
gallerySlider.eventListeners();

}

module.exports = slider;
},{}]},{},[1]);
