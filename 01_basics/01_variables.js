const accountId = 11111
let accountEmail = "aditya@0814"
var accountPassword = "12345" 
//NOTE = prefer not to use "var" bcz of issue in block scope and functional scope.

accountCity = "Jaipur" // variable can be written like this but dont follow this ,always difine variables to use it .

//accountId = 22222  as above accountId define as constant so that its value cant be changed.
console.log(accountId)

accountEmail = "xyz@123"
accountPassword = "54321"
accountCity = "Bihar"

console.table([accountId,accountEmail,accountPassword,accountCity])