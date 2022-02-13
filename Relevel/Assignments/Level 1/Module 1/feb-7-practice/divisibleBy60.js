function isDivisibleBy60( num ){
    sum = 0;
    last = false;
    secondLast = false;
    while(num!=0){
    i = num%10;
    num=parseInt(num/10);
    if(i%2==0 && (i>0 || last))
    secondLast = true;
    if(i==0)
    last = true;
    }
    if(sum%3==0 && last && secondLast)
        return 1;
    return 0;
 }
let number = 210;
console.log(isDivisibleBy60(number));