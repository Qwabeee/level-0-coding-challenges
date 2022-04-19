//task 6

function maximumNumber(x, y, z){
    let maximumNum = 0;
    for(let i= 0; i < arguments.length ; i++){
        if( x > y && x > z){
            maximumNum = x;
        } else if(y > x && y > z){
            maximumNum = y;
        } else {
            maximumNum = z;
        }
        return maximumNum;
    }
};


