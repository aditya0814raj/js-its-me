let score = undefined

//const {score} = req.body
let valueInnumber = Number(score) //note : it convert all datatypes into number either it is convertible or not like "33" which is convertible but also it convert "33abc"which is not convertible.So always check value of number after conversion either it is a no. or not.
console.log(typeof score)
console.log(typeof(score))
console.log(typeof(valueInnumber))
console.log(valueInnumber)




//"33" => 33
//"33abc"=> Nan
// true => 1; false => 0
//"string"=> Nan 
//Null =>0
//undefined => Nan

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof (booleanIsLoggedIn))

//0 => false
//"" => false
//"Aditya" => true

let someNumber = 8
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof (stringNumber))

//like above all these conversion we can convert many more datatypes into one another.
