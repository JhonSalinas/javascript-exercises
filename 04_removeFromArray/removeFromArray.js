const removeFromArray = function(arr, value1, value2, value3, value4) {
let nonMatch = [];
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (element !== value1 && element !== value2 && element !== value3 && element !== value4) {
        nonMatch.push(element);
    } 
}
return nonMatch;
};

// Do not edit below this line
module.exports = removeFromArray;
