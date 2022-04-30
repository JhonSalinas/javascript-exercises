//its number and integer?
function isNumInt(number) {
    return (typeof number) == "number" && Number.isInteger(number) && (number > 0);
}

//find major Value
function majorNum(a ,b) {
    return a < b ? [a,b] : [b,a]; 
}

//function Sum
function sumInt(num) {
    return num * (num+1) / 2;
}

const sumAll = function(firstNum, secondNum) {
    if ( isNumInt(firstNum) && isNumInt(secondNum) ) {
        let pairOrd = majorNum(firstNum, secondNum);
        return sumInt(pairOrd[1]) - sumInt(pairOrd[0]) + pairOrd[0];
    } else {
        return "ERROR";
    }
    };
    
// Do not edit below this line
module.exports = sumAll;
