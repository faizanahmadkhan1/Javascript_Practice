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
console.log(accumulate(5));
console.log(accumulate(6));
console.log(accumulate(10));




