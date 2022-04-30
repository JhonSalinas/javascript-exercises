const palindromes = function (str) {
    str = str.toLowerCase().replace(/[^a-z]+/g,'');
    const arr = str.split('');
    const arrRev = arr.reverse();
    for (let i = 0; i < arr.length; i++) {
        if ( arr[i] !== arrRev[( arr.length - 1 ) - i] ) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
