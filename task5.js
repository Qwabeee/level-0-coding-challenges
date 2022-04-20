
//task 5

function calculateTriangleAreaUsingSidesLength(side1, side2, side3){
    const semiPerimeter = (1/2) * (side1 + side2 + side3);
    let area = 0;
    if( semiPerimeter > 0){
        area = Math.sqrt((semiPerimeter)*(semiPerimeter - side1)*(semiPerimeter - side2)*(semiPerimeter - side3)); 
    }else{
        area = undefined;
    }
return area;
}
