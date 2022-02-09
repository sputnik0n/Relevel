//Destructuring in Nested Object

let Car = {
    carName: 'Toyota Supra',
    model: 'Mk4',
    releaseYear: 1993,
    engine: {
        engineName: '2JZ',
        stockHorsePower: 321
    }
};

let {
    carName: foo,
    engine: {
        engineName: bar,
        stockHorsePower: x
    }
} = Car;

console.log(foo);
console.log(bar);


