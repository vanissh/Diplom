class SliderCarusel{
    constructor({section, main, wrap,position = 0}){

        this.section = document.querySelector(section);
        this.main = this.section.querySelector(main);
        this.wrap = this.main.querySelector(wrap);
        this.slides = this.wrap.querySelectorAll('div');
        this.slidesToShow = 5;
        this.options = {
            position,
            wigthSlide : Math.floor (100 / this.slidesToShow),
        }
    }

    init(){
        this.addClass();
        this.addStyle();
        this.controlSlider();
    }

    addClass(){
        this.main.classList.add('carusel-slider');
        this.wrap.classList.add('carusel-slider__wrap');
        for(const item of this.slides){
            item.classList.add('carusel-slider__item');
        }
    }

    prevSlide(){
        if(this.options.position > 0){
            --this.options.position;
        this.wrap.style.transform = `translateX(-${this.options.position * 
            this.options.wigthSlide}%)`
        }    
    }

    nextSlide(){
        if(this.options.position < this.slides.length - this.slidesToShow){
           ++this.options.position;
        this.wrap.style.transform = `translateX(-${this.options.position * 
            this.options.wigthSlide}%)` 
        }   
    }

    controlSlider(){
        this.section.addEventListener('click', (event) => {
            let target = event.target;

            if(target.closest('.prev')){
                this.prevSlide();
            }

            if(target.closest('.next')){
                this.nextSlide();
            }
        });
    }

    addStyle(){
        const style = document.createElement('style');
        style.id = 'sliderCarusel-style';
        style.textContent = `
            .carusel-slider{ 
              overflow: hidden !important;
            }
            .carusel-slider__wrap{
                display: flex !important;
                transition: transform 0.25s !important;
                will-change: transform !important;
            }
            .carusel-slider__item{
                flex: 0 0 ${this.options.wigthSlide}% !important;
                margin: 0 auto !important;
            }
        `;
        document.head.append(style);
    }
}

export default SliderCarusel;