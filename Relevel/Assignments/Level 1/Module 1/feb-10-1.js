//Object Destructuring of Nested Objects
let newAvengers = {
    name : 'Tony Stark',
    location : {
        city: 'NYC',
        state: 'New York'
    },
    heroName : 'Iron Man'
};

let {
    name: foo,
    location: {
        city: x,
        state: y
    },
    heroName: xoo
} = newAvengers;

console.log(foo);
console.log(x);