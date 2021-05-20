function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
    document.getElementById("outputKelvin").innerHTML=valNum+273.15;
    document.getElementById("outputReamur").innerHTML=(4/5)*valNum;
}

function temperatureConverter2(valNum2) {
    valNum2 = parseFloat(valNum2);
    document.getElementById("outputCelcius2").innerHTML=(valNum2-32)/1.8;
    document.getElementById("outputKelvin2").innerHTML=((valNum2-32)/1.8)+273.15;
    document.getElementById("outputReamur2").innerHTML=4/9*(valNum2-32);
}

function temperatureConverter3(valNum3) {
    valNum3 = parseFloat(valNum3);
    document.getElementById("outputCelcius3").innerHTML=valNum3-273.15;
    document.getElementById("outputFahrenheit3").innerHTML=((valNum3-273.15)*1.8)+32;
    document.getElementById("outputReamur3").innerHTML=(valNum3-273.15)*(4/5);
}

function temperatureConverter4(valNum4) {
    valNum4 = parseFloat(valNum4);
    document.getElementById("outputCelcius4").innerHTML=valNum4*(5/4);
    document.getElementById("outputFahrenheit4").innerHTML=(valNum4 * (9 / 4)) + 32;
    document.getElementById("outputKelvin4").innerHTML=(valNum4 * (5 / 4)) + 273.15;
}