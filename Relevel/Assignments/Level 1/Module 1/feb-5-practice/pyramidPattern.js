let numberOfRows = 5;
let outputString = '';

//external loop
for (let rowFirst = 1; rowFirst <= numberOfRows; rowFirst++){
    //printing spacews
    for(let columns = numberOfRows; columns > rowFirst ; columns--){
        outputString += ' ';
    }
    //printing stars
    for(let spaceBet = 0; spaceBet < rowFirst*2-1; spaceBet++){
        outputString += '*';
    }
    outputString += '\n';
}

console.log(outputString);