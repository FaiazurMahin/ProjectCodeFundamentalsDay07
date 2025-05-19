//Function Declaration

function multiply(a,b){
    return a*b;
}
console.log(multiply(5,5));

// Function declaration can be hoisted..tar mane declare korar agei call diya jabe
console.log(add(5,5));
function add(c,d){
    return c+d;
}

//Function Expression jeta, oita named plus anonymous duitai hote pare, ar variable diye assign kora lageh
//named
let divide=function bhaag(e,f){
    return e/f
}
console.log(divide(5,5));

//or unnamed/anonymous

let divid=function (e,f){
    return e/f
}
console.log(divid(5,5));

//Function Expressions abar hoist kora jaina...mane, declaration er ageh call diya jabena
//Anonymous Functiions create kora jai eita diya..jeita normal function diye creata kora jaina


//Arrow Function
//more precise
const value= (g,h)=>g-h;
console.log(value(5,5));

//Scope - basically ekta variable ar function er accessibility define kore throughout the code

//Global scope - function er baire variable declare korle oita global scoped
//kono variable global scope hole, function er bhitor e call dileo output ashbe

let xyz =  "alphabets";
function abc(){
    console.log(xyz);
}

abc();

//Function scope

function def(){
    let ghi = "more alphabets";
    console.log(ghi);
}

def();
// console.log(ghi); -- function er baire variable print dile ashbena karon function scoped
//khali function er bhitore call dilei ashbe
//karon variable declare o kora hoise function er bhitore

//block scoped
if(true){
    let ijk="more more alphabets";
    console.log(ijk);
}
// console.log(ijk); --- block er baire print korte chaile hobena

//Lexical scope - ekta function er scope basically or position er opor depend kore
//lets say niche, outerval holo outer function scoped but inner function er jonno abar global scoped
//tai inner call dile, hey im outer ashe
//abar outer call dileo same aseh
function outer(){
    let outervar="Hey, I'm outer";
    function inner(){
        console.log(outervar);
    }
    inner();
    console.log(outervar);
}
outer();

// console.log(outervar);  -- hobena karon eita bar function scoped

//Closures

function mnop(){
    let test= "I'm outer";
    function qrst(){
        let test2 = "I'm inner"
        console.log(test);
        console.log(test2);
    }
    qrst(); //- return(line 88) use korle alada kore function call kora lagbe na last e.)
}

const test = "Okay, I'm more outside now";
function lmao(){
    console.log(test);
}

mnop(); //The inner function still remembers the value even after the variable has been redeclared
//this is closure
lmao();
