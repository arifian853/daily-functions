const inputYears = document.querySelector ('#Years > input');
const inputMonths = document.querySelector ('#Months > input');
const inputWeeks = document.querySelector ('#Weeks > input');
const inputDays = document.querySelector ('#Days > input');
const inputHours = document.querySelector ('#Hours > input');
const inputMinutes = document.querySelector ('#Minutes > input');
const inputSeconds = document.querySelector ('#Seconds > input');
const inputMilisecs = document.querySelector ('#Miliseconds > input');
const inputMicrosecs = document.querySelector ('#Microseconds > input');
const inputNanosecs = document.querySelector ('#Nanoseconds > input');

function YearstoAll() {
    const Yearsval = parseFloat(inputYears.value);
    const Monthsval = Yearsval * 12;
    const Weeksval = Yearsval * 52.18;
    const Daysval = Yearsval * 365.25;
    const Hoursval = Yearsval * 8776;
    const Minutesval = Yearsval * 525960;
    const Secsval = Yearsval * 31557600;
    const Msval = Yearsval * 31557600000;
    const Microsecval = Yearsval * (3.16e13);
    const Nanosecval = Yearsval * (3.16e16);
    inputMonths.value = Monthsval;
    inputWeeks.value = Weeksval;
    inputDays.value = Daysval;
    inputHours.value = Hoursval;
    inputMinutes.value = Minutesval;
    inputSeconds.value = Secsval;
    inputMilisecs.value = Msval;
    inputMicrosecs.value = Microsecval;
    inputNanosecs.value = Nanosecval;
}

function MonthstoAll() {
    const Monthsval = parseFloat(inputMonths.value);
    const Yearsval = Monthsval * 0.08;
    const Weeksval = Monthsval * 4.35;
    const Daysval = Monthsval * 30.44;
    const Hoursval = Monthsval * 730.5;
    const Minutesval = Monthsval * 43830;
    const Secsval = Monthsval * 2629800;
    const Msval = Monthsval * 2629800000;
    const Microsecval = Monthsval * 2.63e12;
    const Nanosecval = Monthsval * 2.63e15;
    inputYears.value = Yearsval;
    inputWeeks.value = Weeksval;
    inputDays.value = Daysval;
    inputHours.value = Hoursval;
    inputMinutes.value = Minutesval;
    inputSeconds.value = Secsval;
    inputMilisecs.value = Msval;
    inputMicrosecs.value = Microsecval;
    inputNanosecs.value = Nanosecval;
}

function WeekstoAll() {
    const Weeksval = parseFloat(inputWeeks.value);
    const Yearsval = Weeksval * 0.02;
    const Monthsval = Weeksval * 0.23;
    const Daysval = Weeksval * 7;
    const Hoursval = Weeksval * 168;
    const Minutesval = Weeksval * 10080;
    const Secsval = Weeksval * 604800.02;
    const Msval = Weeksval * 604800016.56;
    const Microsecval = Weeksval * 6.05e11;
    const Nanosecval = Weeksval * 6.05e14;
    inputYears.value = Yearsval;
    inputMonths.value = Monthsval;
    inputDays.value = Daysval;
    inputHours.value = Hoursval;
    inputMinutes.value = Minutesval;
    inputSeconds.value = Secsval;
    inputMilisecs.value = Msval;
    inputMicrosecs.value = Microsecval;
    inputNanosecs.value = Nanosecval;
}

function DaystoAll() {
    const Daysval = parseFloat(inputDays.value);
    const Yearsval = Daysval * 2.74e-3;
    const Monthsval = Daysval * 0.03;
    const Weeksval = Daysval * 0.14;
    const Hoursval = Daysval * 24;
    const Minutesval = Daysval * 1440;
    const Secsval = Daysval * 86400;
    const Msval = Daysval * 86400000;
    const Microsecval = Daysval * 86400000000;
    const Nanosecval = Daysval * 8.64e13;
    inputYears.value = Yearsval;
    inputMonths.value = Monthsval;
    inputWeeks.value = Weeksval;
    inputHours.value = Hoursval;
    inputMinutes.value = Minutesval;
    inputSeconds.value = Secsval;
    inputMilisecs.value = Msval;
    inputMicrosecs.value = Microsecval;
    inputNanosecs.value = Nanosecval;
}

inputYears.addEventListener('input',YearstoAll);
inputMonths.addEventListener('input',MonthstoAll);
inputWeeks.addEventListener('input',WeekstoAll);
inputDays.addEventListener('input',DaystoAll);
inputHours.addEventListener('input',HourstoAll);
inputMinutes.addEventListener('input',MinutestoAll);
inputSeconds.addEventListener('input',SecondstoAll);
inputMilisecs.addEventListener('input',MstoAll);
inputMicrosecs.addEventListener('input',MicrosecstoAll);
inputNanosecs.addEventListener('input',NanosecstoAll);
