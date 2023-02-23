import "./style.css"


async function test() {
    let testGrab = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Denver&APPID=79cee3391283fc4faeb148d2b8050282', {mode: 'cors'});
    let dataManip = await testGrab.json();
    let curTemp = dataManip.main.temp;
    console.table(curTemp);
}

test();
toFarenheit(254.45);
toCelsius(254.45);

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

  