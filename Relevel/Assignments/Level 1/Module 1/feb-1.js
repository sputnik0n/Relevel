let num1 = prompt('Enter the first number');
let num2 = prompt('Enter the second number');
let operation = prompt('Choose an operation: +, -, *, /');
switch(operation) {
    case '+': console.log('The sum of ' + num1 + ' and ' + num2 + ' is ' + (parseInt(num1) + parseInt(num2))); break;
    case '-': console.log('The difference of ' + num1 + ' and ' + num2 + ' is ' + (parseInt(num1) - parseInt(num2))); break;
    case '*': console.log('The product of ' + num1 + ' and ' + num2 + ' is ' + (parseInt(num1) * parseInt(num2))); break;
    case '/': console.log('The quotient of ' + num1 + ' and ' + num2 + ' is ' + (parseInt(num1) / parseInt(num2))); break;
}
