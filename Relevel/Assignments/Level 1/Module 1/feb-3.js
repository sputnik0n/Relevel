//Odd or Even Program
let num = prompt('Enter a number to check if its odd or even');
if(num%2==0)
    console.log('The number ' + num + ' is even');
else
    console.log('The number ' + num + ' is odd');

//Perfect Square Program

let sq = prompt('Enter a number to check if its a perfect square or not');
if(Math.sqrt(sq)%1==0)
    console.log('The number ' + sq + ' is a perfect square');
else
    console.log('The number ' + sq + ' is not a perfect square');