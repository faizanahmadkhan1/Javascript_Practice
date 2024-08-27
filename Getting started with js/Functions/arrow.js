function sqr(x) {
    return x * x;
}

// console.log(sqr(4));
// const x =new sqr(4);
// console.log(x);

// As a fat arrow function


function sqr(x) {return x * x;} // Function declaration
var sqr =function (x) {return x * x;} // Function expression
//~% remove function add arrow on rhs 
var sqr = (x)=> {return x * x;} // Fat arrow function or Lambda function
var sqr =    x =>  {return x * x;} // single (param), remove ()
var sqr =    x =>  x * x; // single return , remove {return}

console.log(sqr(5));
const x = new sqr(5);
console.log(x);
