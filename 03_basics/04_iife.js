//Immediately invoked function expressions.          ()()    1st one contain function and 2nd one for calling and uhh cn pass argument this 2nd bracket as we do in normal function calling

/*function chai(){
    console.log(`DB CONNECTED`);
}
chai()                
*/                //                      or
(function chai(){
    console.log(`DB CONNECTED`);
})();                  // to write 2 or more than 2 iife always end last iife by using semicolon (;)

(function aurCode(){
    console.log(`DB CONNECTED 2`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);          // arrow function using iife
})('Surya')