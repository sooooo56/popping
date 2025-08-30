document.addEventListener('DOMContentLoaded', () => {
    // 가상 이벤트 데이터 (실제로는 API에서 불러와야 함)
    const eventData = {
        '2025-08-01': [
            { name: '오아드팝업', type: 'beuty' },
            { name: 'Alloso 소파다방', type: 'living' }
        ],
        '2025-08-02': [
            { name: '젠틀몬스터 X 브랏츠 팝업', type: 'fashion' },
            { name: '포켓몬 팝업 - 부산', type: 'characters' }
        ],
        '2025-08-03': [
            { name: '음뽀챠무 떡집 팝업', type: 'characters' }
        ],
        '2025-08-31': [
            { name: '코엑스 페스티벌', type: 'event' }
        ],
        '2025-09-01': [
            { name: '오토살롱위크', type: 'exhibition' }
        ],
    };

    const calendarDays = document.getElementById('calendarDays');
    const currentMonthYear = document.getElementById('currentMonthYear');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentDate = new Date();

    // ⭐️ 모바일 전용 렌더링 함수
    function renderMobileCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const lastDate = new Date(year, month + 1, 0).getDate();
        
        currentMonthYear.textContent = `${year}. ${String(month + 1).padStart(2, '0')}`;
        calendarDays.innerHTML = '';
        
        for (let i = 1; i <= lastDate; i++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('day-cell');
            dayEl.innerHTML = `
                <div class="day-number">${i}</div>
            `;

            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            if (eventData[dateStr]) {
                const eventListEl = document.createElement('ul');
                eventListEl.classList.add('event-list');
                
                eventData[dateStr].forEach(event => {
                    const eventItemEl = document.createElement('li');
                    eventItemEl.classList.add('event-item', event.type);
                    eventItemEl.textContent = event.name;
                    eventListEl.appendChild(eventItemEl);
                });
                dayEl.appendChild(eventListEl);
            }
            
            calendarDays.appendChild(dayEl);
        }
    }

    // ⭐️ 데스크톱 전용 렌더링 함수 (기존 코드)
    function renderDesktopCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const firstDay = new Date(year, month, 1).getDay();
        const lastDate = new Date(year, month + 1, 0).getDate();
        const prevMonthLastDate = new Date(year, month, 0).getDate();
        
        currentMonthYear.textContent = `${year}. ${String(month + 1).padStart(2, '0')}`;
        calendarDays.innerHTML = '';
        
        // 지난달 날짜 채우기
        for (let i = firstDay; i > 0; i--) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('day-cell', 'past-day');
            dayEl.innerHTML = `<div class="day-number">${prevMonthLastDate - i + 1}</div>`;
            calendarDays.appendChild(dayEl);
        }

        // 현재 월의 날짜들 생성
        for (let i = 1; i <= lastDate; i++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('day-cell');
            dayEl.innerHTML = `<div class="day-number">${i}</div>`;

            const dayOfWeek = (firstDay + i - 1) % 7;
            
            // ⭐️ 토요일(6)과 일요일(0)에 각각 다른 클래스를 추가
            if (dayOfWeek === 0) {
                dayEl.classList.add('weekend', 'sunday');
            } else if (dayOfWeek === 6) {
                dayEl.classList.add('weekend', 'saturday');
            }
    
            const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
            if (eventData[dateStr]) {
                const eventListEl = document.createElement('ul');
                eventListEl.classList.add('event-list');
                
                eventData[dateStr].forEach(event => {
                    const eventItemEl = document.createElement('li');
                    eventItemEl.classList.add('event-item', event.type);
                    eventItemEl.textContent = event.name;
                    eventListEl.appendChild(eventItemEl);
                });
                dayEl.appendChild(eventListEl);
            }
            calendarDays.appendChild(dayEl);
        }
        
        // 다음달 날짜 채우기 (5주 또는 6주 자동 조정)
        const totalDays = calendarDays.children.length;
        const totalCells = totalDays > 35 ? 42 : 35;
        const nextMonthDays = totalCells - totalDays; 
    
        for (let i = 1; i <= nextMonthDays; i++) {
            const dayEl = document.createElement('div');
            dayEl.classList.add('day-cell', 'next-month-day');
            dayEl.innerHTML = `<div class="day-number">${i}</div>`;
            calendarDays.appendChild(dayEl);
        }
    }

    // ⭐️ 화면 크기에 따라 렌더링 함수를 분기
    function handleCalendarRender() {
        if (window.innerWidth <= 768) {
            renderMobileCalendar();
        } else {
            renderDesktopCalendar();
        }
    }
    
    prevBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() - 1);
        handleCalendarRender(); // 변경된 함수 호출
});

    nextBtn.addEventListener('click', () => {
        currentDate.setMonth(currentDate.getMonth() + 1);
        handleCalendarRender(); // 변경된 함수 호출
    });

    // ⭐️ 페이지 로드 시 및 창 크기 변경 시 렌더링 함수 호출
    handleCalendarRender();
    window.addEventListener('resize', handleCalendarRender);

});