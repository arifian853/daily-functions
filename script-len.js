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

function YardstoAll() {
    const Yardsval = parseFloat(inputYards.value);
    const Feetval = Yardsval * 3;
    const Inchesval = Yardsval * 36;
    const Milesval = Yardsval * 0.00056818;
    const KmUSval = Yardsval / 1093.6;
    const MUSval = Yardsval / 1.0936;
    const CmUSval = Yardsval / 0.010936;
    inputFeet.value = Feetval;
    inputInches.value = Inchesval;
    inputMiles.value = Milesval;
    inputKmUS.value = KmUSval;
    inputMUS.value = MUSval;
    inputCmUS.value = CmUSval;
}

function FeettoAll() {
    const Feetval = parseFloat(inputFeet.value);
    const Yardsval = Feetval * 0.33333;
    const Inchesval = Feetval * 12;
    const Milesval = Feetval * 0.00018939;
    const KmUSval = Feetval / 3280.8;
    const MUSval = Feetval /  3.2808;
    const CmUSval = Feetval / 0.032808;
    inputYards.value = Yardsval;
    inputInches.value = Inchesval;
    inputMiles.value = Milesval;
    inputKmUS.value = KmUSval;
    inputMUS.value = MUSval;
    inputCmUS.value = CmUSval;
}

function InchestoAll() {
    const Inchesval = parseFloat(inputInches.value);
    const Yardsval = Inchesval * 0.027778;
    const Feetval = Inchesval * 0.083333;
    const Milesval = Inchesval * 0.000015783;
    const KmUSval = Inchesval / 39370;
    const MUSval = Inchesval / 39.370;
    const CmUSval = Inchesval / 0.39370;
    inputFeet.value = Feetval;
    inputYards.value = Yardsval;
    inputMiles.value = Milesval;
    inputKmUS.value = KmUSval;
    inputMUS.value = MUSval;
    inputCmUS.value = CmUSval;
}

function MilestoAll() {
    const Milesval = parseFloat(inputMiles.value);
    const Yardsval = Milesval * 1760;
    const Feetval = Milesval * 5280;
    const Inchesval = Milesval * 63360;
    const KmUSval = Milesval / 0.62137;
    const MUSval = Milesval / 0.00062137;
    const CmUSval = Milesval / 0.0000062137;
    inputYards.value = Yardsval;
    inputFeet.value = Feetval;
    inputInches.value = Inchesval;
    inputKmUS.value = KmUSval;
    inputMUS.value = MUSval;
    inputCmUS.value = CmUSval;
}

function KmUStoAll() {
    const KmUSval = parseFloat(inputKmUS.value);
    const Yardsval = KmUSval * 1093.6;
    const Feetval = KmUSval * 3280.8;
    const Inchesval = KmUSval * 39370;
    const Milesval = KmUSval * 0.62137;
    const MUSval = KmUSval * 1000;
    const CmUSval = KmUSval * 100000;
    inputYards.value = Yardsval;
    inputFeet.value = Feetval;
    inputInches.value = Inchesval;
    inputMiles.value = Milesval;
    inputMUS.value = MUSval;
    inputCmUS.value = CmUSval;
}

function MUStoAll() {
    const MUSval = parseFloat(inputMUS.value);
    const Yardsval = MUSval * 1.0936;
    const Feetval = MUSval * 3.2808;
    const Inchesval = MUSval * 39.370;
    const Milesval = MUSval * 0.00062137;
    const KmUSval = MUSval / 1000;
    const CmUSval = MUSval * 100;
    inputYards.value = Yardsval;
    inputFeet.value = Feetval;
    inputInches.value = Inchesval;
    inputMiles.value = Milesval;
    inputKmUS.value = KmUSval;
    inputCmUS.value = CmUSval;
}

function CmUStoAll() {
    const CmUSval = parseFloat(inputCmUS.value);
    const Yardsval = CmUSval * 0.010936;
    const Feetval = CmUSval * 0.032808;
    const Inchesval = CmUSval * 0.39370;
    const Milesval = CmUSval * 0.0000062137;
    const KmUSval = CmUSval / 100000;
    const MUSval = CmUSval / 100;
    inputYards.value = Yardsval;
    inputFeet.value = Feetval;
    inputInches.value = Inchesval;
    inputMiles.value = Milesval;
    inputKmUS.value = KmUSval;
    inputMUS.value = MUSval;
}

// International SI units event listener
inputKilometer.addEventListener('input', KmtoAll);
inputHectometer.addEventListener('input', HmtoAll);
inputDekameter.addEventListener('input', DamtoAll);
inputMeter.addEventListener('input' , MetertoAll);
inputDecimeter.addEventListener('input', DmtoAll);
inputCentimeter.addEventListener('input', CmtoAll);
inputMilimeter.addEventListener('input', MmtoAll);

// US Customary Units event listener

inputYards.addEventListener('input', YardstoAll);
inputFeet.addEventListener('input', FeettoAll);
inputInches.addEventListener('input', InchestoAll);
inputMiles.addEventListener('input', MilestoAll);
inputKmUS.addEventListener('input', KmUStoAll);
inputMUS.addEventListener('input', MUStoAll);
inputCmUS.addEventListener('input', CmUStoAll);
