//Predict the output of the following code and explain the concept of hoisting in JavaScript.

console.log(square(4));  //4 as function dec can be hoisted

function square(x) {
    return x * x;
}

// console.log(cube(3));  //Ref error as func exp can't be hoisted

var cube = function(x) {
    return x * x * x;
};
console.log(cube(3))