// script.js
document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit', 
            second: '2-digit' 
        };
        const formattedDateTime = now.toLocaleDateString('ko-KR', options);
        document.getElementById('datetime').textContent = formattedDateTime;
    }
    
    function updateTodaySchedule() {
        const now = new Date();
        const todayDay = now.toLocaleDateString('ko-KR', { weekday: 'long' });
        const scheduleElements = document.querySelectorAll('.schedule .day');
        scheduleElements.forEach(dayElement => {
            if (dayElement.getAttribute('data-day') === todayDay) {
                const todayScheduleList = document.getElementById('today-schedule-list');
                todayScheduleList.innerHTML = dayElement.querySelector('ul').innerHTML;
            }
        });
    }

    updateDateTime();
    updateTodaySchedule();
    setInterval(updateDateTime, 1000); // 매초 업데이트
    setInterval(updateTodaySchedule, 10800000); // 3시간마다 업데이트
});
