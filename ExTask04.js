// Implement a function createCounter that returns a function. 
// Each time the returned function is called, it should increment and return a counter.

function createcounter(){
    let count=0;
    return function innercount(){
        count++
        console.log("Count:"+count);
    }
}

const X = createcounter();
X();
X();
X();
X();

//Return last e likhe object return korle ek pore X.innerfunction(); call kora lageh
//Drirect function er pashe likhle, pore X(); call dilei hoi

