// swiper
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('#mobile-slider-container', {
        breakpoints: {
            769: {
                enabled: false,
            },
            0: {
                slidesPerView: 1.15,
                spaceBetween: 20,
            },
        },
        
        // 페이지네이션 (점) 활성화
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});
