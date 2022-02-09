let arr = [5,7,3,2,12,10];
arr.sort(function(a,b){return a-b;});
console.log('Second largest number in array is', arr[arr.length-2]);
console.log('Second smallest number in array is', arr[1]);