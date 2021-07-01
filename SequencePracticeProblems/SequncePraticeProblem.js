//1.Single Digit problem
{
    let digit = Math.floor(Math.random()*10);
    console.log("Single Digit number "+ digit);
}

//2.To 1 to 6 digin number
{
    let digit = Math.floor(Math.random()*10)%6+1;
    console.log("Dice Roll: "+ digit);
}

//3.To random digit number addition
{
    let dice1 = Math.floor(Math.random()*10)%6+1;
    let dice2 = Math.floor(Math.random()*10)%6+1;
    let sum = dice1+dice2;
    console.log("Dice Roll Sum: "+ sum);
}

//4.To random digit number sum and average
{
    let digit1 = Math.floor(Math.random()*100);  
    let digit2 = Math.floor(Math.random()*100);
    let digit3 = Math.floor(Math.random()*100);
    let digit4 = Math.floor(Math.random()*100);
    let digit5 = Math.floor(Math.random()*100);
    let sum = digit1+digit2+digit3+digit4+digit5;
    let avg = sum/5;
    console.log("sum: "+ sum+ " avg: "+ avg); 
}

//TO CONVERT INCH TO FEET
console.log("Enter the Inch :" );
const Inch =12;
let firstResult = 41/Inch ;
console.log("Feet : "+ firstResult );



//TO FEET TO METER CONVERSION
 let meter=60/3.2808 * 40/3.2808;
 console.log("60 feet * 40 feet is equal to "+ meter + " meter ");

//TO CONVERT AREA INTO ACRES
let area= meter/4047 *25;
console.log( "Area of 25 plts in acres are " + area);