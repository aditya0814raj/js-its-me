//primitive datatypes

// 7 types : String, Number, Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log ( id === anotherId)

const bigNumber = 6258534578535383353253n // n shows that given datatypes os if BigInt
console.log ( bigNumber )



// Reference types ( non primitive )

// Array,Objects,Functions

const heros = ["shaktiman","heman","doga"];
let myObj = { 
    name : "Aditya",
    age : 22,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId )  //check all the variables's datatypes


 // note : read typeof variable from ecma 



 //+++++++++++++++++++++++++++++++++++++++++++++++++++


 //stack(Primitive) here we got copy of original value  means if we change in copy it willnot chnage original value
 // Heap (Non-Primitive) here we got reference of original value means if change in refernce original value also change 

 // let see example for primitive datatypes.

 let myName = "Aparna" //myName  get stored in stack memory with value "Aparna"
     anotherName = myName  //here we copy the value of myName in stack memory which get  stored as anotherName
  
 console.log(myName)
 console.log(anotherName)    

  anotherName = "Ruchi" // here value of anotherName get chnaged but value of myName will remains same 
  console.log(myName)
 console.log(anotherName)    

  // let see example for Non - primitive datatypes.
   
  let userOne = {
    email:"user@google.com"              //here userOne get stored in stack whose values get stored in heap memory
  }

  let userTwo =  userOne            //here userTwo get stored in stack and it get reference of userOne in same memory of heap.
  userTwo.email = "Aditya@google.com" // here we chnge reference value ofemail via userTwo ,it will also chnage email of userOne bcz of samereference 

  console.log(userOne.email)
   console.log(userTwo.email) 
  