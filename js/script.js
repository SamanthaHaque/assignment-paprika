const casisid = document.getElementById('casis');
const casis = document.querySelector('.casis');
const promissId = document.getElementById('promiss');
const promiss = document.querySelector('.promiss');



casisid.addEventListener('mouseover', () => {
    casis.innerHTML = ` <a href="cam.html"><img src="image/cassislogo.svg" alt="casis-svg" style = height:40px;width:50px;margin-top:-5px;></a>`;

})
casisid.addEventListener('mouseleave', () => {
    casis.innerHTML = `<img src="image/cassislogo.png" alt="casis-svg" style = height:30px;width:50px;>`;

})
promissId.addEventListener('mouseover', () => {
    promiss.innerHTML = `<img src="image/promisslogo.svg" alt="promiss-svg">`;
})
promissId.addEventListener('mouseleave', () => {
    promiss.innerHTML = `<img src="image/promisslogo-white (2).png" alt="promiss-svg">`;
})
$(document).ready(function () {
    $('.samantha').owlCarousel({
        loop: true,
        margin: 10,
        dots: false,
        autoplay: true,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })
})


// scrolltop


const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.resp-nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})
