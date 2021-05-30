// International SI units
const inputKilometer = document.querySelector ('#Km > input');
const inputHectometer = document.querySelector ('#Hm > input');
const inputDekameter = document.querySelector ('#Dam > input');
const inputMeter = document.querySelector ('#M > input');
const inputDecimeter = document.querySelector ('#Dm > input');
const inputCentimeter = document.querySelector ('#Cm > input');
const inputMilimeter = document.querySelector ('#Mm > input');
// US Customary Units below 
const inputYards = document.querySelector ('#Yards > input');
const inputFeet = document.querySelector ('#Feet > input');
const inputInches = document.querySelector ('#Inches > input');
const inputMiles = document.querySelector ('#Miles > input');
const inputKmUS = document.querySelector ('#KilometerUS > input');
const inputMUS = document.querySelector ('#MeterUS > input');
const inputCmUS = document.querySelector ('#CentimeterUS > input');

// International SI units functions

function KmtoAll() {
    const Kmval = parseFloat(inputKilometer.value);
    const Hmval = Kmval * 10;
    const Damval = Kmval * 100;
    const Mval = Kmval * 1000;
    const Dmval = Kmval * 10000;
    const Cmval = Kmval * 100000;
    const Mmval = Kmval * 1000000;
    inputHectometer.value = Hmval;
    inputDekameter.value = Damval;
    inputMeter.value = Mval;
    inputDecimeter.value = Dmval;
    inputCentimeter.value = Cmval;
    inputMilimeter.value = Mmval;
}

function HmtoAll() {
    const Hmval = parseFloat(inputHectometer.value);
    const Kmval = Hmval / 10;
    const Damval = Hmval * 10;
    const Mval = Hmval * 100;
    const Dmval = Hmval * 1000;
    const Cmval = Hmval * 10000;
    const Mmval = Hmval * 100000;
    inputKilometer.value = Kmval;
    inputDekameter.value = Damval;
    inputMeter.value = Mval;
    inputDecimeter.value = Dmval;
    inputCentimeter.value = Cmval;
    inputMilimeter.value = Mmval;
}

function DamtoAll() {
    const Damval = parseFloat(inputDekameter.value);
    const Kmval = Damval / 100;
    const Hmval = Damval / 10;
    const Mval = Damval * 10;
    const Dmval = Damval * 100;
    const Cmval = Damval * 1000;
    const Mmval = Damval * 10000;
    inputKilometer.value = Kmval;
    inputHectometer.value = Hmval;
    inputMeter.value = Mval;
    inputDecimeter.value = Dmval;
    inputCentimeter.value = Cmval;
    inputMilimeter.value = Mmval;
}

function MetertoAll() {
    const Mval = parseFloat(inputMeter.value);
    const Kmval = Mval / 1000;
    const Hmval = Mval / 100;
    const Damval = Mval / 10;
    const Dmval = Mval * 10;
    const Cmval = Mval * 100;
    const Mmval = Mval * 1000;
    inputKilometer.value = Kmval;
    inputHectometer.value = Hmval;
    inputDekameter.value = Damval;
    inputDecimeter.value = Dmval;
    inputCentimeter.value = Cmval;
    inputMilimeter.value = Mmval;
}

function DmtoAll() {
    const Dmval = parseFloat(inputDecimeter.value);
    const Kmval = Dmval / 10000;
    const Hmval = Dmval / 1000;
    const Damval = Dmval / 100;
    const Mval = Dmval / 10;
    const Cmval = Dmval * 10;
    const Mmval = Dmval * 100;
    inputKilometer.value = Kmval;
    inputHectometer.value = Hmval;
    inputDekameter.value = Damval;
    inputMeter.value = Mval;
    inputCentimeter.value = Cmval;
    inputMilimeter.value = Mmval;
}

function CmtoAll() {
    const Cmval = parseFloat(inputCentimeter.value);
    const Kmval = Cmval / 100000;
    const Hmval = Cmval / 10000;
    const Damval = Cmval / 1000;
    const Mval = Cmval / 100;
    const Dmval = Cmval / 10;
    const Mmval = Cmval * 10;
    inputKilometer.value = Kmval;
    inputHectometer.value = Hmval;
    inputDekameter.value = Damval;
    inputMeter.value = Mval;
    inputDecimeter.value = Dmval;
    inputMilimeter.value = Mmval;
}

function MmtoAll() {
    const Mmval = parseFloat(inputMilimeter.value);
    const Kmval = Mmval / 1000000;
    const Hmval = Mmval / 100000;
    const Damval = Mmval / 10000;
    const Mval = Mmval / 1000;
    const Dmval = Mmval / 100;
    const Cmval = Mmval / 10;
    inputKilometer.value = Kmval;
    inputHectometer.value = Hmval;
    inputDekameter.value = Damval;
    inputMeter.value = Mval;
    inputDecimeter.value = Dmval;
    inputCentimeter.value = Cmval;
}

// US Customary Units functions



// International SI units event listener
inputKilometer.addEventListener('input', KmtoAll);
inputHectometer.addEventListener('input', HmtoAll);
inputDekameter.addEventListener('input', DamtoAll);
inputMeter.addEventListener('input' , MetertoAll);
inputDecimeter.addEventListener('input', DmtoAll);
inputCentimeter.addEventListener('input', CmtoAll);
inputMilimeter.addEventListener('input', MmtoAll);

// US Customary Units event listener