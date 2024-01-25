g=10; //! Definitely Global Variable
var x=5; //*Local variable in node
var y=7; //* but part of window object in browser

function add(a,b) {
    var c; // *Local variables

    c= a+b;
    return c;
}

var z= add(x,y);
console.log('z',z);

