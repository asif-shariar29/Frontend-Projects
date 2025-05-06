const hourE1 = document.getElementById("hours");
const minutesE1 = document.getElementById("minutes");
const secondsE1 = document.getElementById("seconds");
const ampmE1 = document.getElementById("ampm");
const dateE1 = document.getElementById("date");


function digitalClock() {
    const now = new Date();
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h = h < 10 ? "0"+ h : h;
    m= m< 10 ? "0"+ m: m;
    s= s< 10 ? "0"+ s : s;

   hourE1.innerText = h;
   minutesE1.innerText = m;
   secondsE1.innerText = s;
   ampmE1.innerText = ampm;

   const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   const monthNames = ["January", "February", "March", "April", "May", "June", "July",
       "August", "September", "October", "November", "December"];

    const day = dayNames[now.getDay()];
    const date = now.getDate();
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();

    dateE1.innerText = `${day},${date} ${month} ${year}`;

   setTimeout(() => {
    digitalClock();
   },1000);
}

digitalClock();