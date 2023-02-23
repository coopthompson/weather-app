import "./style.css";

import { fetchFrom, toCelsius, toFarenheit } from "./weather";

const location = document.getElementById('location');
const submit = document.querySelector('.sub-button');
const display = document.querySelector('.info-display');


//add inserts to the link for location
function pickLocation() {
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&APPID=79cee3391283fc4faeb148d2b8050282`
    return link;
}

submit.addEventListener('click', async function () {
    try {
        let cityName = pickLocation();
        const localWeather = await fetchFrom(cityName);
        console.log(localWeather);
        displayData(localWeather);
    } catch (err) {
        console.error(err)
    } 
}) 



async function displayData(weatherObj) {
    emptyDisplay();
    const tempDisplay = document.createElement('div');
    const conditDisplay = document.createElement('div');
    display.appendChild(tempDisplay);
    let Farenheit  = await toFarenheit(weatherObj.curTemp) + '°F';
    let Celsius = await toCelsius(weatherObj.curTemp) + '°C';
    let conditions = await weatherObj.conditions;
    tempDisplay.textContent = Farenheit 
    conditDisplay.textContent = `Conditions: ${conditions}`
}

function emptyDisplay() {
    while(display.firstChild) {
        display.removeChild(display.lastChild);
    }
}

function toggleWeather(targetDiv, option1, option2) {
    if (targetDiv.textContent === option1) {
        targetDiv.textContent = option2
    } else if (targetDiv.textContent === option2) {
        targetDiv.textContent = option1
    }
}

  