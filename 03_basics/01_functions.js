function sayMyName () {
console.log("h")
console.log("i")
console.log("t")
console.log("e")
console.log("s")
console.log("h")
}

//sayMyName()       // only sayMyName is reference but adding '()' makes excution

//function addTwoNumbers(number1, number2){                     //here number1, number2 are called parameters 
 //           console.log(number1 + number2 )
//}


function addTwoNumbers(number1, number2){                     //here number1, number2 are called parameters 
            //let result = number1 + number2
               
            //return result
            return number1 + number2
           // console.log("Aditya")                        //unreachable code.
}
addTwoNumbers(3,null)                                       // here 3,null are  called arguments

const result = addTwoNumbers(3,5)
//console.log("Result: ",result)



function loginUserMessage (username){
    if(username === undefined){
   console.log("please enter a username")   
   return    
    }
    return`${username} just logged in `
}

//console.log(loginUserMessage("hitesh"))
console.log(loginUserMessage())