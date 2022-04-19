//task 8

function convertNumToHour(num){
    let minutes = num % 60;
    let hours = num/60 ;
    let howManyHours = parseInt(hours.toString().split(".")[0]);
    let hourAbbr = howManyHours <= 1 ? "hour" : "hours";

    if( minutes > 0){
        hours = (num - minutes)/60;
    }
    if(hours < 1){
        return num;
    }
    console.log(hours + hourAbbr, minutes + "minutes")

}

