var array =[11,23,36];
console.log("array", array);

//~* Higher order Function (HoF)
//* A function which takes function as a parameter
//* A function which returns a function

//* Passing an external  function to HoF
console.log("Pass an external function");
//*array  -> [11,23,36]
//*           |  |  |
//*           V  V  V
array.forEach(printElement); //* forEach is a HoF
//*             |
//*             V
function printElement(element) {
    console.log(element);
}

//~* 2. Pass function directly as parameter
console.log("Pass function directly as parameter");
array.forEach(function(element){console.log(element);});

//~* 3. Pass  Fat arrow function  as parameter
console.log("Pass  Fat arrow function  as parameter");
array.forEach(element => {console.log(element);});

//~* Array has variety of Higher order functions
//~* Find out  if all the elements pass the condition
console.log("every element is >10",array.every(elem => elem >10));

//~* Find out  if all the elements pass the condition
console.log("Some elements > 30",array.some(elem => elem > 30));

//~* Find the first element passing the condition
console.log("first element > 20",array.find(elem => elem > 20));

//~* Find the elements which are odd 
console.log("odd elements", array.filter(elem=>elem%2==1));

//~*  Map- Transform elements of an array into a new array

//% Double every element in the array 
var doubleArray= array.map(elem=>elem*2);
console.log("double array", doubleArray);

//% Transform language array into objects
var languages = ["Java","Javascript","Python"];
var obj= languages.map(lang => ({language:lang, length:lang.length}));
console.log("obj",obj);
//~^ Reduce all elements of an array to single value 

var sum=array.reduce((accumulator,elem) => accumulator + elem);
console.log("sum",sum);

//^ Reduce can take only initial value of accumulator

var expenses =[
    {txn:1, desc:"Swiggy",amt:250},
    {txn:2, desc:"Uber",amt:800},
    {txn:3, desc:"Amazon",amt:1400}

];

console.log("Expenses",expenses);

//! Doesnot work as it tries to add all objects and not amount

var sum =expenses.reduce((accumulator,exp) => accumulator+exp.amt);
console.log("sum", sum);  // sum [object object]8001400

//^ we can pass initial value as 0 so that it does not add objects 
var sum =expenses.reduce((accumulator,exp) => accumulator+exp.amt,0);
console.log("sum", sum);  


