/* function reverseString(stringValue){
   let updatedString = '';
   for(let i = stringValue.length-1; i >= 0; i--) {
       updatedString += stringValue[i];
   }
   return updatedString;
}
*/
let str = "Coding is fun";
//console.log(reverseString(str));
console.log(str.split('').reverse().join(''));