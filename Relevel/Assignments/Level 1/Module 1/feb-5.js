//SUm of Digits of Number Program
console.log('Sum of digits of the given number is: ');
let num = 637;
let sum = 0;
let rem = 0;
while(num){
    sum += num%10;
    num = Math.floor(num/10);
}
console.log(sum);

//Prime Palindrome Program
console.log('All the prime numbers between 1 and 50 are: ');
for(let i = 2;i <= 50; i++) {
    let prime = true;
    for(let j=2; j < i; j++ ){
        if(i%j == 0){
            prime = false;
            break;
        }
    }
    if(prime)
        console.log(i + '');
}