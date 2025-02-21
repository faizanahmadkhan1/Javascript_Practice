// ~ create an array using brackets []
var array =[11,23,36];
console.log(array);

//% 1. Replace Elements
array[2]=200;
console.log(array);
//% 2.Add elements
array[3]=300;
console.log(array);

//% 3. Skip Elements
array[5]= 500;
console.log(array);

//! Arrays are object with .length Property 
console.log(array.length);

//~~ ! 1. Array can have non-numeric index and values
array["boo"]="yeah";
array[false]=true;
console.log(array);
console.log(array.length);

//Length is that formula that find largest positive key and return that plus one. This is not true indicator of number of elements in an array

// 2. Array can have negative index
array[-1]="Brendan Eich"
console.log(array);
console.log(array.length);

//!@@@ 3. Array can be also assigned using object.property notation
array.hi="Hello";
console.log(array);
array["hi"]="Hey!";
console.log(array);

