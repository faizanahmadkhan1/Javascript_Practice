//~* Data Types in Javascript

//* 1. Boolean

var isCompleted =false;
console.log(isCompleted, typeof isCompleted);
if(isCompleted)
console.log("It's done");

//* 2. Number

var pi =3.1415;
console.log(pi, typeof pi);

//* 3. String
var name='Faizan';
var lastName='Khan';
var fullName = `Name is ${name} ${lastName}`; 
console.log(fullName, typeof fullName);


//* 4. Bigint
var largeNum= 22228778522123321458958n
console.log(largeNum, typeof largeNum);

//* 5. Symbol
var unique = Symbol("my-key");
console.log(unique, typeof unique);
var another  =Symbol("my-key");
console.log(another, typeof another);
console.log(unique===another);


//% 6. Null
var address= null;
console.log(address, typeof address);

//% 7. Undefined
var undef = undefined;
console.log(undef, typeof undef);


//# 8. Objects
var Employee1= {Name: "Amir", Id:23445, Age:null };
console.log(Employee1, typeof Employee1);
var Employee2 = {Name: "Nehal", Id:23446, Age:undefined };
console.log(Employee2, typeof Employee2);
console.log(Employee1.Age);
console.log(Employee2.Age);


