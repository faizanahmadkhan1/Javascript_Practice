//~^ 𝘖𝘶𝘵𝘦𝘳 𝘍𝘶𝘯𝘤𝘵𝘪𝘰𝘯
function zoo() {


    //~* Local variables of zoo function 
    var tiger= "zinda hai";
    var lion="zaroor marega";
    //~* Inner Function 
    function cage() {
        //~% tiger is not a variable of cage function
        console.log("tiger",tiger);
    }
    //~! At this point all local variables of zoo are destroyed 
    return cage;
    
    }
    
    //~? Call zoo to obtain cage 
    
    var pinjara= zoo();
    
    //~? we are calling cage but local var of zoo are destroyed 
    pinjara();