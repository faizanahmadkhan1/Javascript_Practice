// ES6 class  introduced in 2015 

class Account {
    // constructor 
    constructor(an,hn,bal) {
        //F I E L D S 
        this.accountNumber=an;
        this.holderName=hn;
        this.balance=bal;
        
    }

    // M E T H O D S (JS automatically puts it in prototype. We are not using key word function )
    deposit (amount){
        this.balance+=amount;
    }
    withdraw (amount){
        this.balance-=amount;

    }
    //^*  G E T T E R (Looks like a field runs like a method )
    get accountBalance() {return this.balance;}

}

class SavingsAccount extends Account {
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error("Withdrawal amount must be positive");
          }
      
        if(this.balance-amount < 500) {
            throw new Error("Insufficient balance");

        }
        
    super.withdraw(amount);


    }
}

//^^ Object instantiation
var dumaria=new Account(2, "Loha Singh",2000 );
dumaria.deposit(8000);
dumaria.withdraw(80);
console.log(dumaria);
console.log(dumaria.accountBalance);
console.log("class", typeof Account);



