function exponent(base, sol)
{
    let count = 0;
    if(sol == 1)
        return 0;
    return (1+exponent(base, sol/base));
    
}

let base = 8, sol = 64;
console.log(exponent(base, sol));