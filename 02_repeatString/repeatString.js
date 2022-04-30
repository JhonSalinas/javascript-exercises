const repeatString = function(str, numRep) {
    let finalText = '';
    for(let i = 0; i < numRep; i++) {
        finalText += str;
    }
    return numRep < 0 ? "ERROR" : finalText ;
};

// Do not edit below this line
module.exports = repeatString;
