const findTheOldest = function(array) {

const date = new Date();

let oldesFind = array.reduce( function (previousV, currentV) {
   if(currentV.yearOfDeath === undefined ) {
    currentV.yearOfDeath = date.getFullYear();
   } else if(previousV.yearOfDeath === undefined) {
    previousV.yearOfDeath = date.getFullYear();
   }

   const a = previousV.yearOfDeath - previousV.yearOfBirth;
   const b = currentV.yearOfDeath - currentV.yearOfBirth;
    return a < b ? currentV : previousV;
} );
    return oldesFind;
};

// Do not edit below this line
module.exports = findTheOldest;
