// swiper
document.addEventListener('DOMContentLoaded', () => {
 const swiper = new Swiper('#mobile-slider-container', {
        loop: true,
        // autoplay : {
        //     delay: 5000,
        //     disableOnInteraction: false,
        // },
        breakpoints: {
            769: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1.15,
                spaceBetween: 20,
            },
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    
});
document.addEventListener('DOMContentLoaded', () => {
// 신규 팝업
    // 새로운 Swiper 슬라이더 (텍스트와 이미지 동시 변경)
    const newSwiperData = [
        {
            name: "음뽀챠무 떡집 팝업",
            date: "2025. 7. 4.~2025. 8. 17.",
            info: "시루떡으로 입국한 음뽀챠무의 굿즈/포토존 <br>+ 빤쮸토끼 콜라보 포함 팝업."
        },
        {
            name: "포켓몬 팝업 - 부산",
            date: "2025. 7. 25.~2025. 8. 17.",
            info: "포켓몬과 함께하는 시원한 여름 팝업!<br>다양한 포켓몬 굿즈와 포토존을 만나보세요."
        },
        {
            name: "달빛천사 X 팝퍼블 콜라보 카페",
            date: "2025. 8. 1.~2025. 9. 30.",
            info: "추억의 애니메이션 달빛천사 콜라보 카페.<br>다양한 컨셉의 음료와 디저트를 만나보세요."
        },
        {
            name: "어비치 팝업",
            date: "2025. 8. 1.~2025. 8. 31.",
            info: "힙하고 감각적인 어비치 팝업스토어.<br>다양한 신상 의류와 굿즈를 만나보세요."
        },
        {
            name: "퍼글러 팝업",
            date: "2025. 8. 1.~2025. 8. 31.",
            info: "귀여운 퍼글러 굿즈와 포토존.<br>한정판 굿즈를 놓치지 마세요!"
        }
    ];

    var newSwiper = new Swiper(".new-Swiper", {
        slidesPerView: 'auto',
        spaceBetween: 30,
        loop: true,
        autoplay : {
            delay: 5000,
            disableOnInteraction: false,
        },

        breakpoints: {
            769: {
                slidesPerView: 2.5,
                spaceBetween: 30,
            },
            0: {
                slidesPerView: 1.15,
                spaceBetween: 20,
            },
        },
        
        on: {
            slideChange: function () {
                const activeIndex = this.realIndex;
                const activeData = newSwiperData[activeIndex];
                
                document.querySelector('.new-name').innerHTML = activeData.name;
                document.querySelector('.new-date').innerHTML = activeData.date;
                document.querySelector('.new-info').innerHTML = activeData.info;
            },
        },
    });
});
