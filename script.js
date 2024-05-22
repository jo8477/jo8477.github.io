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
    
    updateDateTime();
    setInterval(updateDateTime, 1000); // 매초 업데이트
});
