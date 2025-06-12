//Identify and fix the issue in the following code to ensure it logs numbers from 0 to 4.

for (let i = 0; i < 5; i++) {  //var hobena karon declaration accept kore same block kore
    //overwrite hoye jai var use korle 
    setTimeout(function() {
        console.log(i);
    }, 2000);
}

//setTimer(function, ms)