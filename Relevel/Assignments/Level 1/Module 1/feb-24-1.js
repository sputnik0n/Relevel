var MAX_SIZE = 1000005;

function SieveOfEratothenes(primes){
    let isPrime = Array(MAX_SIZE).fill(true);
    let p,i;
    for(p=2;p*p<MAX_SIZE;p++)
    {
        if(isPrime[p] == true)
        {
            for(i=p*p;i<MAX_SIZE;i+=p){
                isPrime[i] = false;
            }
        }
    }

    for(p=2; p<MAX_SIZE;p++)
        if(isPrime[p])
            primes.push(p);
}

let primes = [];
SieveOfEratothenes(primes);

console.log("6th prime number is "+ primes[15]);