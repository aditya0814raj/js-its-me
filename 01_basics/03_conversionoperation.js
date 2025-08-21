//conversion functions are number(),boolean(),string(),+ (unary plus) this plus work same as this number()



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
console.log(typeof(someNumber))
console.log(typeof (stringNumber))

//like above all these conversion we can convert many more datatypes into one another.


//*************************OPERATIONS****************************

let value = 3
let negValue = -value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(3/2);
console.log(2%3);

let str1 ="hello"
let str2 =" Aditya"
let str3 = str1 + str2
console.log (str3)
console.log("   ")
console.log("1"+2)
console.log(1+"2")          //read once [ecma (abstract operation)]
console.log("1"+"2")
console.log("1"+2+3)
console.log(1+2+"3")
console.log(1+"2"+3)
console.log(3+4*6%3)

console.log(+true)           //here + is unary plus convert value into number. hence true converted to 1. and " " this empty string converted into 0;
//console.log(true+)
console.log(+" ")

let num1,num2,num3
num1 = num2 = num3 = 2+3
let gameCounter = 100;
 gameCounter++  // read prefix and postfix operator from mdn web docs
 console.log(gameCounter)



