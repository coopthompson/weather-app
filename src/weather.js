export async function fetchFrom(place) {
    try {
        let testGrab = await fetch(place, {mode: 'cors'});
        let dataManip = await testGrab.json();
        let curTemp = dataManip.main.temp;
        let conditions = dataManip.weather[0].description
        return { curTemp, conditions };
    } catch (err) {
        console.error(err);
    }
}

//convert from Kelvin to Farenheit to nearest integer
export function toFarenheit(Kelvin) {
    let Farenheit = Math.round((Kelvin - 273.15) * (9/5) + 32);
    return Farenheit;
}

//convert from Kelvin to Celsius to nearest integer
export function toCelsius(Kelvin) {
    let Celsius = Math.round((Kelvin - 273.15))
    return Celsius;
}