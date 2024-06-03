document.addEventListener('DOMContentLoaded', () => {
    const daysContainer = document.getElementById('days');
    const availableTimesContainer = document.getElementById('available-times');
    const monthName = document.getElementById('month-name');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const form = document.getElementById('booking-form');
    const yourselfButton = document.getElementById('yourself');
    const anotherPersonButton = document.getElementById('another-person');
    const maleButton = document.getElementById('male');
    const femaleButton = document.getElementById('female');

    const times = ['9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM'];

    let selectedDate = null;
    let currentMonth = 8; // September (0-indexed month)

    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    function updateCalendar() {
        monthName.textContent = months[currentMonth];
        daysContainer.innerHTML = '';
        const daysInMonth = new Date(2024, currentMonth + 1, 0).getDate();

        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'day';
            dayElement.textContent = `${day} ${new Date(2024, currentMonth, day).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}`;
            dayElement.addEventListener('click', () => selectDate(day));
            daysContainer.appendChild(dayElement);
        }
    }

    function selectDate(day) {
        selectedDate = new Date(2024, currentMonth, day);
        document.querySelectorAll('.day').forEach(el => el.classList.remove('selected'));
        document.querySelectorAll('.day')[day - 1].classList.add('selected');
        updateAvailableTimes();
    }

    function updateAvailableTimes() {
        availableTimesContainer.innerHTML = '';
        times.forEach(time => {
            const timeElement = document.createElement('div');
            timeElement.className = 'time';
            timeElement.textContent = time;
            timeElement.addEventListener('click', () => selectTime(timeElement));
            availableTimesContainer.appendChild(timeElement);
        });
    }

    function selectTime(element) {
        document.querySelectorAll('.time').forEach(el => el.classList.remove('selected'));
        element.classList.add('selected');
    }

    function handleToggleButton(button1, button2) {
        button1.classList.add('active');
        button2.classList.remove('active');
   
