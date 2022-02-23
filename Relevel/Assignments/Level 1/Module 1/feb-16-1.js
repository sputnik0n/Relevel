//count maximum occuring char in string

let ASCII_SIZE = 256;

function getMaxFreq(str) {
    let count = new Array(ASCII_SIZE);
    for(let i = 0; i < ASCII_SIZE; i++)
        count[i] = 0;
    
    let len = str.length;

    for(let i = 0; i < len; i++)
        count[str[i].charCodeAt(0)] += 1;

    let max = -1;
    let result = ' ';
    
    for(let i =0; i< len; i++)
    {
        if(max < count[str[i].charCodeAt(0)])
        {
            max = count[str[i].charCodeAt(0)];
            result = str[i];
        }
    }
    
    return result;
}

let str = "unacademy";
console.log(getMaxFreq(str));