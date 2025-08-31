document.addEventListener('DOMContentLoaded', () => {
    const selectedDate = document.querySelectorAll('.date-btn div');
    const selectedCategory = document.querySelectorAll('.category-btn .flex-content div');
    const resetButton = document.querySelector('.reset-btn');

    function toggleSelection(items) {
        items.forEach(item => {
            item.addEventListener('click', (e) => {
                const isSelected = e.target.classList.contains('selected');
                
                if (isSelected) {
                    e.target.classList.remove('selected');
                } else {
                    e.target.classList.add('selected');
                }
            });
        });
    }

    toggleSelection(selectedDate);
    toggleSelection(selectedCategory);

    // ⭐️ 초기화 버튼 클릭 이벤트 리스너
    if (resetButton) {
        resetButton.addEventListener('click', () => {
            const allSelectedItems = document.querySelectorAll('.selected');
            
            allSelectedItems.forEach(item => {
                item.classList.remove('selected');
            });
        });
    }
});



document.addEventListener('DOMContentLoaded', () => {
    // 필요한 DOM 요소들을 선택합니다.
    const searchButtonFixed = document.querySelector('.search-button-fixed');
    const leftContainer = document.querySelector('.left-container');
    const contentContainer = document.querySelector('.content-container');

    // 모달 컨테이너를 동적으로 생성합니다.
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';
    modalContainer.innerHTML = `
        <div class="modal-backdrop"></div>
        <div class="modal-content">
            <div class="modal-header">
                <button class="modal-close-btn">
                    <img src="./img/icon/close-big-w.png" alt="닫기">
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modalContainer);

    const modalContent = modalContainer.querySelector('.modal-content');

    // 화면 크기에 따라 left-container를 이동시키는 함수
    const handleLayout = () => {
        if (window.innerWidth <= 1024) {
            // 모바일 화면일 때: left-container가 모달 안에 없으면 이동시킵니다.
            if (!modalContent.contains(leftContainer)) {
                modalContent.appendChild(leftContainer);
            }
        } else {
            // 데스크톱 화면일 때: left-container가 모달 안에 있으면 원래 위치로 되돌립니다.
            if (modalContent.contains(leftContainer)) {
                contentContainer.prepend(leftContainer);
            }
        }
    };

    // '팝업 찾기' 버튼 클릭 시 모달 열기
    searchButtonFixed.addEventListener('click', () => {
        modalContainer.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    // 모달 닫기 버튼 또는 배경 클릭 시 모달 닫기
    modalContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-container') || e.target.closest('.modal-close-btn')) {
            modalContainer.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // 페이지 로드 시 및 창 크기 변경 시 함수 실행
    handleLayout();
    window.addEventListener('resize', handleLayout);
});