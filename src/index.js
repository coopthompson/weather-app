import "./style.css"
const location = document.getElementById('location')
const submit = document.querySelector('.sub-button')


async function fetchFrom(place) {
    try {
        let testGrab = await fetch(place, {mode: 'cors'});
        let dataManip = await testGrab.json();
        let curTemp = dataManip.main.temp;
        console.table(curTemp);
        return curTemp;
    } catch (err) {
        console.error(err);
    }
}

//add inserts to the link for location
function pickLocation() {
    let link = `https://api.openweathermap.org/data/2.5/weather?q=${location.value}&APPID=79cee3391283fc4faeb148d2b8050282`
    return link;
}

submit.addEventListener('click', async function () {
    try {
        let cityName = pickLocation();
        let kelTemp = await fetchFrom(cityName);
        await toFarenheit(kelTemp);
        await toCelsius(kelTemp); 
    } catch (err) {
        console.error(err)
    } 
}) 

//convert from Kelvin to Farenheit to nearest integer
function toFarenheit(Kelvin) {
    let Farenheit = Math.round((Kelvin - 273.15) * (9/5) + 32);
    console.log(Farenheit);
}

//convert from Kelvin to Celsius to nearest integer
function toCelsius(Kelvin) {
    let Celsius = Math.round((Kelvin - 273.15))
    console.log(Celsius)
}

  