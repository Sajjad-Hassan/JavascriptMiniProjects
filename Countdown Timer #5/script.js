const DAYS = document.querySelector('#days');
const HOURS = document.querySelector('#hours');
const MINS = document.querySelector('#mins');
const SECONDS = document.querySelector('#seconds');

const newYears = "1 Jan 2022";

function countdown()
{
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate -  currentDate) /1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds % 60);


    DAYS.innerHTML = days;
    HOURS.innerHTML = hours;
    MINS.innerHTML = minutes;
    SECONDS.innerHTML = seconds;
}

countdown();

setInterval(countdown, 1000);