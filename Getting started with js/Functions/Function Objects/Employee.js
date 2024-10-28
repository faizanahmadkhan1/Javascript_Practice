
function Employee (id,name) {
    this.id= id; 
    this.name = name;
// !!Don't do this  because if we create inside , a copy of this go in every single object we create
this.print=function() {
    console.log(this.id,this.name);
}


}

Employee.count=1;// This goes to mother function object
Employee.prototype.printDetails= function() {//%$ Prototype 
    console.log(this.id,this.name);
}

var eich= new Employee (1,"Brendan");
console.log(eich);
eich.printDetails(); // Prototype chaining 
console.log(eich.toString());//Prototype chain, Grand Father 
