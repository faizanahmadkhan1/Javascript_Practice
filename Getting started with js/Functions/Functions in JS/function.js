
function add(a,b) {
    console.log("add",this);
 

    return a + b;

}


var person ={

    id:1,
    name:"Faizan",
    print: function() {
        console.log("person", this)
    }
}

console.log(add(5,7));
person.print();
