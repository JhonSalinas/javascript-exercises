const fibonacci = function(order) {
if (order < 0) {
    return "OOPS";
}    
if( order == 1 ) {
    return 1;
}else if( order == 2 ) {
    return 1;
} else {
   return fibonacci(order - 1) + fibonacci(order - 2);
}
};

// Do not edit below this line
module.exports = fibonacci;
