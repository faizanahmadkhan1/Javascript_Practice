//~* 𝗦𝗼𝗺𝗲 𝗹𝗮𝗻𝗴𝘂𝗮𝗴𝗲𝘀 𝗮𝗹𝗹𝗼𝘄 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻 𝗶𝗻𝘀𝗶𝗱𝗲 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀 (𝗶𝗻𝗻𝗲𝗿 𝗳𝘂𝗻𝗰𝘁𝗶𝗼𝗻𝘀)  
//* ⁡⁢⁣⁢𝘑𝘢𝘷𝘢𝘴𝘤𝘳𝘪𝘱𝘵, 𝘋𝘢𝘳𝘵, 𝘗𝘺𝘵𝘩𝘰𝘯 , 𝘒𝘰𝘵𝘭𝘪𝘯,𝘙𝘶𝘴𝘵,𝘚𝘤𝘢𝘭𝘢, 𝘊#⁡

//~* 𝗦𝗼𝗺𝗲 𝗹𝗮𝗻𝗴𝘂𝗮𝗴𝗲𝘀 𝗮𝗹𝗹𝗼𝘄 𝗰𝗹𝗮𝘀𝘀𝗲𝘀 𝗜𝗻𝘀𝗶𝗱𝗲 𝗰𝗹𝗮𝘀𝘀𝗲𝘀 (𝗶𝗻𝗻𝗲𝗿 𝗰𝗹𝗮𝘀𝘀𝗲𝘀)
//* ⁡⁢⁣⁣⁡⁢⁢⁣𝗝𝗮𝘃𝗮, 𝗖++, 𝗣𝘆𝘁𝗵𝗼𝗻⁡ 

// class outer {
//     class inner {

//     }
// }  // It has unexpected errors 


function outer() {
    var outervar=5;
    console.log("outer",outervar);
    
    function inner() {
        var innervar=10;
        console.log("inner", innervar,outervar);
        
    }
    //~! All local vars of outer will be destroyed here!
    
   return inner;
}

var captureInner=outer();
console.log(captureInner);
captureInner();

// Closure is an object attached to a inner function.
 



    outer();
    