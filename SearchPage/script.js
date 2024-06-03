const calendarBody = document.getElementById("calendar-body");
const monthYear = document.getElementById("month-year");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateCalendar(month, year) {
  calendarBody.innerHTML = "";
  monthYear.textContent = `${months[month]} ${year}`;

  let firstDay = new Date(year, month).getDay();
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  let row = document.createElement("tr");

  for (let i = 0; i < firstDay; i++) {
    let cell = document.createElement("td");
    cell.classList.add("empty");
    row.appendChild(cell);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    if (firstDay === 7) {
      calendarBody.appendChild(row);
      row = document.createElement("tr");
      firstDay = 0;
    }
    let cell = document.createElement("td");
    cell.textContent = day;
    row.appendChild(cell);
    firstDay++;
  }

  calendarBody.appendChild(row);
}

function prevMonth() {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  generateCalendar(currentMonth, currentYear);
}

function nextMonth() {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  generateCalendar(currentMonth, currentYear);
}

generateCalendar(currentMonth, currentYear);
