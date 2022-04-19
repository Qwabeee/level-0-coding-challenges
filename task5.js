
//task 5

function triangleArea(a, b, c){
    let s = (1/2) * (a + b + c);
    let area = 0;
    if( s > 0){
        area = Math.sqrt((s)*(s-a)*(s-b)*(s-c)); 
    }else{
        area = undefined;
    }
return area;
}