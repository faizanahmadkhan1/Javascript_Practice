/* Javascript is not traditional class-based object oriented programming languages like C++ ,JAVA,C#
They have classes which are like blue print to create multiple objects.
Js  always has been a prototype based object  oriented language so technically there is no 
such thing  as a class in JS .However we can create multiple objects using constructor function. */

//* Constructor function (should be called with new)
function Account (an,hn,bal) {

    //! FIELDS (properties)
    this.accountNumber=an;
    this.holderName=hn;
    this.balance=bal;
}

//# METHODS 
Account.prototype.deposit=function(amount){
    this.balance+=amount;
}
Account.prototype.withdraw=function(amount){
    this.balance-=amount;
}

//^^ Object instantiation
var khaira= new Account(1,"Shadid Khan", 1000);
khaira.deposit(1000);
khaira.withdraw(500);
console.log(khaira);
console.log("Function", typeof Account);

/*  However programmers of other languages who are used to the concept of class 
find it difficult to mentally shift to this style of programming so JS decided
to atleast at the keyword class There are no classes in JS internally
but there is a keyword called class  which we look in next example
AccountClass.js */