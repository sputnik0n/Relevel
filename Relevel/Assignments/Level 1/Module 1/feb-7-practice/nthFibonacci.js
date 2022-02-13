function nthFib(Nth){
    let prev = 0, current = 1, temp;
    
    if(Nth === 1)
        return prev;
    else if(Nth === 2)
        return current;
    else
        for(let i=3; i <= Nth; i++)
        {
            temp = prev;
            prev = current;
            current += temp; 
        }
        return current;
}

let Nth = 5;
console.log(nthFib(Nth));