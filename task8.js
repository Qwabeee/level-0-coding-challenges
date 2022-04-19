//task 8

function convertNumToHour(num){
    let minutes = num % 60;
    let hours = num/60 ;
    let howManyHours = parseInt(hours.toString().split(".")[0]);
    let hourAbbr = howManyHours <= 1 ? "hour" : "hours";
    let minAbbr;

    if( minutes > 0){
        hours = (num - minutes)/60;
    }
    if(hours < 1){
        return num;
    }
    if(minutes === 1){
        minAbbr = "minute";
    }else{
        minAbbr = "minutes";
    }
    console.log(hours + hourAbbr, minutes + "minutes")

}

