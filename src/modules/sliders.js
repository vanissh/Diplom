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