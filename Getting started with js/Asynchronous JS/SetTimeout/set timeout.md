
![alt text](image.png) 

use of set timeout to avoid freezing 

![alt text](image-1.png)

Example:

````HTML````
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SetTimeout</title>
</head>

<script>
function longRun(ms){

    console.log("longRun started");
    const start= new Date;
    while(new Date-start<ms)
    /*Do nothing*/;
console.log("longRun ended")
}
 


function Frozen() {
    console.log("frozen started");
    longRun(5000);
    console.log("frozen ended");
}

function useTimeout(){
    console.log("useTimeout started ");
    setTimeout(longRun,3000,5000);
    console.log("useTimeout ended");
}
</script>

<body>
<input type="number"/>
    <button onclick="Frozen()">Frozen</button>
    <button onclick="useTimeout()">TimeOut</button>

</body>
</html>


setTimeout is feature of browser not  of js. It does not run parallely . It doesnot run in background.
It just runs delayed.
