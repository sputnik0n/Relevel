// a^2 + b^2 = A. Find 1 possible value for a and b.
function sumOfTwoSquares(A){
    let a,b;
    for(a=1;a*a<A;a++)
    {
        for(b=a; b*b<A; b++)
        {
            if(a*a + b*b === A)
                return { first:a , second:b };
        }
    }
}

let A = 10;
console.log(sumOfTwoSquares(A));