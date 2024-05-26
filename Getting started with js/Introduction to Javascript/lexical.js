function Employee(id, name) {
    this.id = id;
    this.name = name;

function printf() {
    console.log(this.id, this.name);
}

printl = () => {
console.log(this.id,this.name);

}

printf();
printl();

}

var eich =new Employee(1, "Brendan");
