//Clone Object -> change property -> iterate array of objects -> console the object property -> frame a meaningful sentence
const laptop = {
    make: 'ASUS',
    model: 'ROG Strix 17',
    memory: ['SSD', 'HDD'],
    cores: 8,
    memorySize : [512, 1024]
};
//clone object
const laptopObjCopy = Object.assign({}, laptop);
//change property
delete laptopObjCopy.cores;
laptopObjCopy.make = 'Gigabyte';
laptopObjCopy.model = 'Aero 15' ;

//iterate array of objects
let arr = [laptop, laptopObjCopy];
console.log(arr);
const entries = Object.entries(arr);
//arr.forEach((key, index) => {
 //   console.log(`${key}: ${arr[key]}`);
//});
//console the obhect property
console.log(entries);

//frame a meaningful sentence
for([key, value] of Object.entries(arr)) {
    console.log(`My laptop is from ${value.make} and model is ${value.model}`);
}
