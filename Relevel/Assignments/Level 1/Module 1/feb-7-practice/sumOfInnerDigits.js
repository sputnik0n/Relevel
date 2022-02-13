function getDigitSum(num)
{
 var sum = 0;
 if (num.toString().length<3){
 return -1;
 }
 do{
 num = parseInt(num / 10);
 sum = sum + num % 10;
 }
 while (parseInt(num / 100) != 0);
 return sum;
}
var n = 2124;
console.log(getDigitSum(n));