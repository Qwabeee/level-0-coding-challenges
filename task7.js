
//task 7

function convertCelsiusTempToFahrenheitTemp(temp){
    const fahrenheitTemperature = temp * 9.0 / 5 + 32;
    return fahrenheitTemperature;
    
}

function convertFahrenheitTempToCelsiusTemp(temp){
    const celsiusTemperature = 5/9 * (temp - 32) ;
    return celsiusTemperature;
}
