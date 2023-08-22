import './index.css';
import '../node_modules/fslightbox/index.js';

import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('#slider', {
    modules: [Navigation],
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    loop: true,
    autoHeight: true,
    calculateHeight:true
});

const btn = document.querySelector("#mobile-menu-button");
const menu = document.querySelector("#menu");

btn.addEventListener("click", () => {
    if(menu.classList.contains('flex')){
        menu.classList.remove('flex')
        menu.classList.add('hidden')
    }else{
        menu.classList.remove('hidden')
        menu.classList.add('flex')
    }
});


const btn_expand = document.querySelector("#expand-area-btn");
const expand_area = document.querySelector("#expand-area");

btn_expand.addEventListener("click", (e) => {
    e.preventDefault()
    if(expand_area.classList.contains('max-h-screen')){
        btn_expand.innerHTML = 'Zwiń <span class="icon-arrow-top"></span>';
        expand_area.classList.remove('max-h-screen')
        expand_area.classList.add('max-h-full')
    }else{
        btn_expand.innerHTML = 'Rozwiń <span class="icon-arrow-bottom"></span>';
        expand_area.classList.remove('max-h-full')
        expand_area.classList.add('max-h-screen')
        expand_area.scrollIntoView();
    }
});