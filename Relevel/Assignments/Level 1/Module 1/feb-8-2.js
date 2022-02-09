function getSum(...input){
    let sum = 0;
    for(let item of input)
        sum += item;
    return sum;
}

console.log(getSum(1,2,3));