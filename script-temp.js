const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');
const reaumurInput = document.querySelector('#reaumur > input');

function celciusToAll() {
    const celciusTemp = parseFloat(celciusInput.value);
    const fahrenheitTemp = (celciusTemp * (9/5)) + 32;
    const kelvinTemp = celciusTemp + 273.15;
    const reaumurTemp = (4/5) * celciusTemp; 
    fahrenheitInput.value = fahrenheitTemp;
    kelvinInput.value = kelvinTemp;
    reaumurInput.value = reaumurTemp;
}

function fahrenheitToAll() {
    const fahrenheitTemp = parseFloat(fahrenheitInput.value);
    const celciusTemp = (fahrenheitTemp - 32) / 1.8;
    const kelvinTemp = ((fahrenheitTemp - 32) / 1.8) + 273.15;
    const reaumurTemp = 4/9 * (fahrenheitTemp - 32);
    celciusInput.value = celciusTemp;
    kelvinInput.value = kelvinTemp;
    reaumurInput.value = reaumurTemp;
}

function kelvinToAll() {
    const kelvinTemp = parseFloat(kelvinInput.value);
    const celciusTemp = kelvinTemp - 273.15;
    const fahrenheitTemp = ((kelvinTemp - 273.15)*1.8)+32;
    const reaumurTemp = (kelvinTemp - 273.15) * (4/5);
    celciusInput.value = celciusTemp;
    fahrenheitInput.value = fahrenheitTemp;
    reaumurInput.value = reaumurTemp;
}

function reaumurToAll() {
    const reaumurTemp = parseFloat(reaumurInput.value);
    const celciusTemp = reaumurTemp * (5/4);
    const fahrenheitTemp = (reaumurTemp * (9/4))+ 32;
    const kelvinTemp = (reaumurTemp * (5/4)) + 273.15;
    celciusInput.value = celciusTemp;
    fahrenheitInput.value = fahrenheitTemp;
    kelvinInput.value = kelvinTemp;
}

celciusInput.addEventListener('input', celciusToAll);
fahrenheitInput.addEventListener('input', fahrenheitToAll);
kelvinInput.addEventListener('input', kelvinToAll);
reaumurInput.addEventListener('input', reaumurToAll);