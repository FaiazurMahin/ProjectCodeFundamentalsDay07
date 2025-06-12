//Write a function createMultiplier that takes a number x and returns a new function. 
// The returned function should take another number y and return the product of x and y.

function createMultiplier(x){
    return function inner(y){
        return x*y;
    }
}
let doubler=createMultiplier(2);
let tripler=createMultiplier(3);
console.log(doubler(3));
console.log(tripler(3));