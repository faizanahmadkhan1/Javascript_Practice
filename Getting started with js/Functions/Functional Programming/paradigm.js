//~^ Functions as defined in Mathematics 
//~^ fn (val) -> val x val x val 

//~* functions in Programming Languages 
function cube(val) {
    return val * val * val ; 
} 

var total=0;
//~! Impure functions - Uses and Modifies Data Outside 
function accumulate (num) {
//Modifying external variable
    total += num;
    return total;
}
//console.log(accumulate(5));
//console.log(accumulate(6));
//console.log(accumulate(10));

//~* Pure Function: does not use / Modify outside data 
function accumulate (total,value) {
    return total + value;

}
var total=0;
console.log(accumulate(total,5));
console.log(accumulate(total,7));
console.log(accumulate(total,1));

//~*2 Higher Order Fumction (HOF)- Pass function to another function
const expenses= [
    {txn:1, desc:"Zomato",amount:350},
    {txn:2, desc:"Amazon",amount:1150},
    {txn:3, desc:"Uber",amount:550}

];
//* reduce is a HOF 
const sum= expenses.reduce((total,exp)=>accumulate(total,exp.amount),0);

console.log("SUM",sum);

//!3. Lambda (Fat arrow Function)

function sqr(x) {
    return x*x;
}
console.log("Square of (5)=", sqr(5));
// Rewriting as Lambda function
function sqr(x) {return x*x;} // Function Declaration
var sqr=function(x) {return x*x;} // Function Expression
var sqr=(x)=> {return x*x;} //Lambda Expression 
// IF we have single statement and single () we can drop it 
// concise lambda function
var sqr= x =>  x * x;
