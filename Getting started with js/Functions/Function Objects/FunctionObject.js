//* Compute function
function add (a,b) {
    return a + b;

}  

console.log(add(5,7));

//! Object literal 
var person = {
    
    id:1,
    name: "Brendan",

}
//& Constructor Function
function Person (id,name) {
    this.id=id;
    this.name=name;

}

var eich = new Person(1,"Brendan");
console.log(eich);
var andressen=new Person(2,"Marc");
console.log(andressen);


