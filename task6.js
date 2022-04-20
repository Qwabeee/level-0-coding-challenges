//task 6

function returnMaximumNumber(num1, num2, num3){
    let maximumNum = 0;
    for(let i= 0; i < arguments.length ; i++){
        if( num1 > num2 && num1 > num3){
            maximumNum = num1;
        } else if(num2 > num1 && num2 > num3){
            maximumNum = num2;
        } else {
            maximumNum = num3;
        }
        return maximumNum;
    }
};


