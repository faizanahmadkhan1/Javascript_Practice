//% ~ Executor is passed 2 functions -  resolve and reject

function Executor (resolve,reject) {
    if (new Date %2)
        resolve("successful"); // On success call resolve
    else 
    reject("Failed"); // !! On Failure call reject
}

//~? Promise is an object which calls the executor Synchronously

const pakka = new Promise (Executor);
console.log("promise made");

//~? .then()/.catch will be calculated in Deferred Manner 

pakka
.then(result=>console.log("then",result)) //* if resolve()
.catch(error=>console.log("catch",error)); //* if reject()

// This would be done before .then and .catch
console.log("program ends");
