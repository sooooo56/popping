// navi
document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon');
    const closeIcon = document.querySelector('.close-icon');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const fullSchedule = document.querySelector('.full-schedule');

    searchIcon.addEventListener('click', () => {
        searchContainer.classList.add('active');
        fullSchedule.style.opacity = '0';
        fullSchedule.style.width = '0';
        searchInput.focus();
    });

    closeIcon.addEventListener('click', () => {
        searchContainer.classList.remove('active');
        fullSchedule.style.opacity = '1';
        fullSchedule.style.width = 'auto';
    });
});