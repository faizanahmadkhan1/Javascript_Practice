var array=[11,23,37];
array[5]=500;
array["boo"]="Yeah";
array[-1]=5;
console.log("array",array);
console.log();

//~* 1. for loop
console.log("for");
for (var index=0;index<array.length;index++)
    console.log(index,array[index]);
console.log();

//~* 2. for IN (INdex)
console.log("for in");
for (var index in array)
    console.log(index,array[index]);
console.log();

//~* 3. for of (Value of)
console.log("for of");
for (var value of array)
    console.log(value);
console.log();

//~* 4. forEach
console.log("forEach");
array.forEach (elem=>console.log(elem));
console.log();
