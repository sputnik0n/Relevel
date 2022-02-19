//use tail recursion to find sum of all array elements

function tailRecursion(arr,size, sum = 0){
    if(size === 0)
        return sum;
    return tailRecursion(arr, size - 1, sum + arr[size-1]);
}

let arr = [1,2,3,4,5,6,7,8,9,10];
let size = arr.length;
console.log(tailRecursion(arr, size));