const num = 7; //Number of Terms
let n1=0, n2=1, nextTerm=0, term=8;
console.log('Fibonacci Series: ');
/*
for(let i=1; i<=num; i++){
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2= nextTerm;
}
*/
//Upto a certain number in Fibonacci series

while(n1 <= term)
{
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2= nextTerm;
}