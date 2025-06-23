//singleton 
//object.create

//object literals
const mySym = Symbol("key1")           //  "symbol"  declaration.

const JsUser = {
    name: "Hitesh" ,
    "full name":"Aditya Raj",
    mySym:"mykey2",              //here our key i.e mySym is not used as symbol but below its a symbol
    [mySym]:"mykey1",        //  syntax to use symbol.
    age:22,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}
console.log(JsUser.email)
console.log(JsUser["email"])  // more better way to print object elements
console.log(JsUser["full name"]) // uhhh cnt access it by using (JsUser.full name) , thts why always follow ["  "] this way of accessing elements of objects
console.log(JsUser.mySym)
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"  // change in email ,btw uhh can make edit any element of (JsUser)
//Object.freeze(JsUser)           // to lock my elements of object (JsUser) so tht no can edit it or overwrite it.
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser)

JsUser.greeting = function(){
console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
console.log(`Hello JS user, ${this.name}`) // backticks are used during string interploatation and "${  }" is used to .....read it via on9
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())