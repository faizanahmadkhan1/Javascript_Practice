var array=[11,23,36];
console.log("array",array);                 //> array [11,23,36]

//$$ 1. Add Elements to the end (push)

array.push(48);
console.log("push(48)",array);                //> push(48) [11,23,36]

//$$ 2. Add Elements to the beginning (unshift)

array.unshift(5);
console.log("unshift(5)",array);                //> unshift(5) [5,11,23,36,48]

//$$ 3. Remove last Element (POP)

array.pop();
console.log("pop()",array);                //> pop() [5,11,23,36]

//$$ 4. Remove the first  Element (shift)

array.shift();
console.log("shift()",array);                //> shift() [11,23,36]

//$$ 5. Remove Any  Elements (splice)

array.splice(1,1);
console.log("splice(1,1)",array);     //> splice(1,1) [ 11, 36 ]

array.splice(1,2);
console.log("splice(1,2)",array);    //> splice(1,2) [ 11 ]

