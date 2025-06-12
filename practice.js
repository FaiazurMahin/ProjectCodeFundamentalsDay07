//Bankaccount problem

function bankbal(inibal){
    
    let currentbal=inibal;

    function deposit(amount){
        currentbal+=amount;
        console.log("Current Ballance after depositing is:"+currentbal);
    }

    function withdraw(amount){
        if (currentbal<amount){
            console.log("Insufficient Amount");
        }
        else{
            currentbal-=amount;
            console.log("Current Ballance after withdrawing is:"+currentbal);
        }
    }

    function showbal(){
        console.log("Current Ballance is:"+currentbal);
    }

    return{
        deposit,
        withdraw,
        showbal,
    }
}

const privatebal=bankbal(50000);
privatebal.deposit(10000);
privatebal.withdraw(20000);
privatebal.showbal();


//Greeting problem

function greeting(){
    function personalgreeting(name){
        console.log("Hey there, "+name+"!");
    }
    function formalgreeting(name){
        console.log("Hello Sire, "+name+"!")
    }
    return{
        personalgreeting,
        formalgreeting
    }
}

let allgreeting = greeting();
allgreeting.personalgreeting("Mahin");
allgreeting.formalgreeting("Deni");