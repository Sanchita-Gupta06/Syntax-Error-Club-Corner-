
function generateCalendar() {
    const calendar = document.getElementById("calendar");
    const date = new Date();

     
    const month = date.getMonth();
    const year = date.getFullYear();

     
    const firstDay = new Date(year, month, 1).getDay();
     
    const lastDate = new Date(year, month + 1, 0).getDate();

    
    calendar.innerHTML = '';

     
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    
     
    const weekdayHeader = document.createElement("div");
    weekdayHeader.className = "weekday-header";
    weekdays.forEach(day => {
        const dayElement = document.createElement("div");
        dayElement.className = "weekday";
        dayElement.innerText = day;
        weekdayHeader.appendChild(dayElement);
    });
    calendar.appendChild(weekdayHeader);

    for (let i = 0; i < firstDay; i++) {
        const blankDay = document.createElement("div");
        calendar.appendChild(blankDay);
    }

     
    for (let day = 1; day <= lastDate; day++) {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.innerText = day;

         
        dayElement.addEventListener("click", () => {
            const reminder = prompt("Add a reminder for " + day + "/" + (month + 1) + "/" + year);
            if (reminder) {
                addReminder(day, month + 1, year, reminder); // month + 1 to match the 1-12 format
            }
        });

        calendar.appendChild(dayElement);
    }
}


function addReminder(day, month, year, reminder) {
    console.log("Adding reminder:", { day, month, year, reminder }); // Log the data being sent
    fetch('http://127.0.0.1:3000/addReminder', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            day: day,
            month: month,
            year: year,
            reminder: reminder,
        }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message);
        alert(data.message);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}



window.onload = generateCalendar;




const textElement = document.getElementById("animated-text");
const text = "Welcome to ClubCorner!";
let index = 0;
let typingSpeed = 100;  
let untypingSpeed = 50;

function type() {
  if (index < text.length) {
    textElement.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(untype, 1000);  
  }
}

function untype() {
  if (index > 0) {
    textElement.innerHTML = textElement.innerHTML.slice(0, -1);
    index--;
    setTimeout(untype, untypingSpeed);
  } else {
    setTimeout(() => {
      textElement.innerHTML = "";  
      index = 0;  
      type();  
    }, 1000); 
  }
}

type();




 