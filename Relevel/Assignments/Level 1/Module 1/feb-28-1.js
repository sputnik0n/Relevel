function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] < key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key;
        
    } 
    return arr;
} 

function bubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        var isSwapped = false;
        // Last i elements are already sorted
        for (var j = 0; j < (inputArray.length - i - 1); j++) {
            // Check if the current element is greater than the next element
            if (inputArray[j] < inputArray[j + 1]) {
                // If the condition is true then swap them
                var temp = inputArray[j];
                inputArray[j] = inputArray[j + 1];
                inputArray[j + 1] = temp;
                isSwapped = true;
            }
        }
        if (!isSwapped)
            break;
    }
    return inputArray;
}

function selectionSort(inputArray)
{
    var i, j, minimumIndex;
 
    for (i = 0; i < inputArray.length-1; i++)
    {
        // Initialize the current element as minimumIndex
        minimumIndex = i;
        for (j = i + 1; j < inputArray.length; j++)
        {
            if (inputArray[j] > inputArray[minimumIndex])
            {
                minimumIndex = j;
            }
        }
        // Swap the found minimum element with the current element
        if (minimumIndex != i)
        {
            var temp = inputArray[minimumIndex];
            inputArray[minimumIndex] = inputArray[i];
            inputArray[i] = temp;
        }
    }
    return inputArray;
}

let arr = [12, 11, 13, 5, 6 ]; 
    let n = arr.length;
    console.log(arr);
   
    console.log(insertionSort(arr, n));
    console.log(bubbleSort(arr));
    console.log(selectionSort(arr));