// shift positive numbers at the start of array and negative numbers at the end.

function shiftNo(arr){
let left = 0;
let right = arr.length - 1;
let temp = 0;
while(left <= right)
{
    if(arr[left] < 0 && arr[right] < 0)
        right--;
    else if (arr[left] < 0 && arr[right] >= 0)
    {
        temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    else if (arr[left]>0 && arr[right]>0)
        left++;
}
return arr;
}

let arr = [-19, 9, 7, -4, 10, 12, 14, -5];
console.log(shiftNo(arr));