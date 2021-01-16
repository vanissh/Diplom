(()=>{"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var o;o=function(e){e.classList.toggle("active"),function(e){e.classList.contains("active")?e.style.display="block":e.style.display="none"}(e)},document.addEventListener("click",(function(e){var t=e.target,n=document.querySelector(".clubs-list").querySelector("ul"),r=document.getElementById("free_visit_form"),i=document.getElementById("callback_form"),l=document.getElementById("gift");t.closest(".club-select")&&t.closest("p")&&o(n),(t.closest(".open-popup")||(t.closest(".overlay")||t.closest(".close_icon"))&&r.classList.contains("active"))&&o(r),(t.closest(".callback-btn")||(t.closest(".overlay")||t.closest(".close_icon"))&&i.classList.contains("active"))&&o(i),(t.closest(".fixed-gift")&&t.closest("img")||(t.closest(".overlay")||t.closest(".close_icon"))&&l.classList.contains("active"))&&(o(l),t.closest(".fixed-gift")&&t.closest(".fixed-gift").remove())})),function(){var t=function(){function t(n,r,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentSlide=0,this.container=document.querySelector(n),this.slide=e(this.container.querySelectorAll(r)),this.interval,this.dot=e(document.querySelectorAll(i))}var r,i;return r=t,(i=[{key:"noDisplay",value:function(){for(var e=1;e<this.slide.length;e++)this.slide[e].style.display="none";this.dot[0].classList.add("slick-active")}},{key:"show",value:function(e,t){e.classList.contains(t)?e.style.display="flex":e.style.display="none"}},{key:"prevSlide",value:function(e,t,n){e[t]&&(e[t].classList.remove(n),e===this.slide&&this.show(e[t],n))}},{key:"nextSlide",value:function(e,t,n){e[t]&&(e[t].classList.add(n),e===this.slide&&this.show(e[t],n))}},{key:"autoPlay",value:function(){this.prevSlide(this.slide,this.currentSlide,"active"),this.prevSlide(this.dot,this.currentSlide,"slick-active"),this.currentSlide++,this.currentSlide>=this.slide.length&&(this.currentSlide=0),this.nextSlide(this.slide,this.currentSlide,"active"),this.nextSlide(this.dot,this.currentSlide,"slick-active")}},{key:"startSlide",value:function(){this.interval=setInterval(this.autoPlay.bind(this),3e3)}},{key:"stopSlide",value:function(){clearInterval(this.interval)}},{key:"eventListeners",value:function(){var e=this;this.container.addEventListener("click",(function(t){t.preventDefault();var n=t.target;e.prevSlide(e.slide,e.currentSlide,"active"),e.prevSlide(e.dot,e.currentSlide,"slick-active"),n.closest(".slider-arrow.next")?e.currentSlide++:n.closest(".slider-arrow.prev")?e.currentSlide--:n.closest("li")&&e.dot.forEach((function(t,r){t===n.closest("li")&&(e.currentSlide=r)})),e.currentSlide>=e.slide.length?e.currentSlide=0:e.currentSlide<0&&(e.currentSlide=e.slide.length-1),e.nextSlide(e.slide,e.currentSlide,"active"),e.nextSlide(e.dot,e.currentSlide,"slick-active")})),this.container.addEventListener("mouseover",(function(t){(t.target.closest("span")||t.target.closest("button"))&&e.stopSlide()})),this.container.addEventListener("mouseout",(function(t){(t.target.closest("span")||t.target.closest("button"))&&e.startSlide()}))}}])&&n(r.prototype,i),t}();new t(".head-slider",".slide").startSlide(),new t(".head-slider",".slide");var r=new t(".gallery-slider",".slide","ul.slider-dots li");r.noDisplay(),r.startSlide(),r.eventListeners()}(),function(){document.querySelector(".menu-button");var e,t=document.querySelector(".top-menu"),n=function(e){if(Array.isArray(e))return i(e)}(e=document.querySelectorAll("li.scroll"))||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||r(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),o=document.querySelector(".popup-menu"),l=t.getBoundingClientRect().top+pageYOffset,s=document.documentElement.clientWidth;window.addEventListener("resize",(function(){(s=document.documentElement.clientWidth)>=768&&(t.style.position="")})),window.addEventListener("scroll",(function(){if(s<768){var e=t.getBoundingClientRect();pageYOffset<l&&(t.style.position=""),e.top<0&&(t.style.position="fixed")}})),document.addEventListener("click",(function(e){var t=e.target;t.matches('img[src="images/menu-button.png"]')&&(o.style.display="flex"),(t.matches('img[src="images/delete.png"]')||t.matches("a")&&t.closest(".popup-menu"))&&(o.style.display="none")})),function(){var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=r(e))){n&&(e=n);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,s=!0,c=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){c=!0,l=e},f:function(){try{s||null==n.return||n.return()}finally{if(c)throw l}}}}(n);try{var i=function(){var t=e.value;t.querySelector("a").addEventListener("click",(function(e){var n;e.preventDefault(),n=t.querySelector("a").getAttribute("href"),document.querySelector(n).scrollIntoView({behavior:"smooth",block:"center"})}))};for(t.s();!(e=t.n()).done;)i()}catch(e){t.e(e)}finally{t.f()}}()}(),function(){var e=document.querySelector(".header-main"),t=document.querySelector("#totop");t.style.display="none",document.addEventListener("scroll",(function(){var n=e.getBoundingClientRect().top<-.5*e.offsetHeight;t.style.display=n?"block":"none"})),t.addEventListener("click",(function(t){t.preventDefault(),e.scrollIntoView({behavior:"smooth",block:"start"})}))}()})();