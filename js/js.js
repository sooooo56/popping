<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

document.addEventListener('DOMContentLoaded', () => {
    // Swiper 인스턴스 생성
    const swiper = new Swiper('.mobile-slider-container', {
       // 모바일에서만 슬라이더 활성화
       // 화면 너비가 768px 이하일 때만 Swiper 활성화
       breakpoints: {
           769: {
               enabled: false,
           },
       },
       
       // 슬라이드 설정
       slidesPerView: 1.15, // 한 화면에 보이는 슬라이드 수
       spaceBetween: 20, // 슬라이드 사이 간격
       
       // 페이지네이션 (점) 활성화
       pagination: {
           el: '.swiper-pagination',
           clickable: true,
       },
   });
})