function LCM(x, y){
    let greaterNum, lcm;
    if(x > y)
        greaterNum = x;
    else
        greaterNum = y;
    
    while(true){
        if((greaterNum % x === 0) && (greaterNum % y === 0)) {
            lcm = greaterNum;
            break;
    }
    greaterNum++;
    }
    return lcm;
}

let x= 20, y=30;
console.log(LCM(20, 30));