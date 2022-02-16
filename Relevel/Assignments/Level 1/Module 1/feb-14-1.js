//sort 2 sorted arrays, sized m and n, into one, with time complexity of O(m+n).

let arr1 = [1,3,4,6,8,9];
let arr2 = [2,5,7,10];

function arrSort(arr1, arr2) {
    let sortedArr = [];
    for(i=0,j=0;i<arr1.length,j<arr2.length;)
    {
        if(arr1[i]<arr2[j])
        {
            sortedArr.push(arr1[i]);
            i++;
        }
        else if(arr1[i] === arr2[j])
        {
            sortedArr.push(arr1[i]);
            sortedArr.push(arr2[j]);
            i++;
            j++;
        }
        else
        {
            sortedArr.push(arr2[j]);
            j++;
        }
    }
    return sortedArr;
}

console.log(arrSort(arr1, arr2));