const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween: 22,
    pagination: {
        el: '.js-testimonials-pagination',
        clickable: true,
    },
    breakpoints: {
        768: {
            sliderPerView: 2
        }
    }
});


let news_link = document.querySelectorAll('.news_link')



const tabs = document.querySelectorAll('#tabs')
const all_contents = document.querySelectorAll('#contents')

tabs.forEach((item, index) => {
    item.addEventListener('click', function () {
        tabs.forEach(function (item, index) {
            item.classList.remove('!bg-[#D42E5B]')
            item.classList.remove('!text-[#FFFFFF]')
            all_contents[index].classList.add("hidden")
        })
        item.classList.add('!bg-[#D42E5B]')
        item.classList.add('!text-[#FFFFFF]')
        all_contents[index].classList.remove("hidden")
    })
})