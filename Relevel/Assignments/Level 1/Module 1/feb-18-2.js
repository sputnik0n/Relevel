//function that returns string palindrome

function palindromeString(string){
    if(string == '')
        return '';
    return palindromeString(string.substr(1)) + string.charAt(0);
}

let string = "john wick";
console.log(palindromeString(string));

