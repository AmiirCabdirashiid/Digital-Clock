// first updating clock : make function named updateClock 
function updateClock(){
    // make new class that holds date object
    const now = new Date();

    const hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2,'0')
    const seconds = String(now.getSeconds()).padStart(2,'0')

    const ampm = hours>=12? 'pm' : 'am'

    document.querySelector(".hours").textContent=`${String((hours)).padStart(2,'0')}:${minutes}:${seconds}`
    document.querySelector(".am-pm").textContent=ampm

    const option = {
        year:'numeric',
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    }

    document.querySelector('.date').textContent= now.toLocaleDateString(undefined, option)
}

updateClock()
setInterval(updateClock,1000)