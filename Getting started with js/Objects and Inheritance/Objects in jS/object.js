//* JS is prototype based Object oriented Language 

//^object literal--->  {property:value,property:value,property:value....}
var person= {id:1};
//console.log(person);
person.name="Nicola"
console.log(person);
person["age"]=55;
console.log(person);
//person.110="Plan" it will give error because of invalid identifier.
person["110"]="Plan;"
console.log(person);
person["Full-name"]= "Nicola Tesla";
console.log(person);

 person.print=function () {
    console.log("Hey There I am a Function!!");
 }
 console.log(person);
person.print();