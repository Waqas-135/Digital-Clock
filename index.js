const hoursEL = document.getElementById("Hours")
const minutesEL = document.getElementById("Minutes")
const secondEL = document.getElementById("Second")
const ampm = document.getElementById("AMPM")

function updateClock(){

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds(); 
    let pmam = "AM";

    if (h > 12){
        h = h - 12 ; 
        pmam = "PM"
    }

    h = h < 10 ? "0" + h : h; 
    m = m < 10 ? "0" + m : m; 
    s = s < 10 ? "0" + s : s; 

    hoursEL.innerText = h;
    minutesEL.innerText = m;
    secondEL.innerText = s;
    ampm.innerText = pmam;

    setTimeout(()=>{
        updateClock()
    },1000)

}

updateClock()
