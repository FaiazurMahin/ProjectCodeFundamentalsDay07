//Predict the output of the following code snippet and explain why.
let message = "Hello, World!";

function sayMessage() {
    let message = "Hello, JavaScript!";
    console.log(message);
}

sayMessage();    //Hello js, function scoped, so different thing is saved inside saymsg function
//calling out the function will print that output
console.log(message); //Hello world, global scope...calling it outside function will print this
