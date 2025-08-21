function sayMyName () {
console.log("h")
console.log("i")
console.log("t")
console.log("e")
console.log("s")
console.log("h")
}

//sayMyName()       // only sayMyName is reference but adding '()' makes excution

function addTwoNumbers(number1, number2){                     //here number1, number2 are called parameters 
        console.log(number1 + number2 )
}


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
//console.log(loginUserMessage())

/*function calculateCartPrice (...num1){     //      here (...num1) works as rest operator not as spread operator.,if we use only num1 instead of ...num1 it will store only 1st argument of all passed argument during function excution.
    return num1  
}*/
function calculateCartPrice (val1,val2,...num1){        // here val1 ad val2 store 1st and 2nd argument of all passed argument and remaining argument will store in ...num1
    return num1  
}
console.log(calculateCartPrice(200,300,400,2000))

////object inside function ////////

const user = {
    username: "hitesh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
handleObject(user)

////array inside funciton ////////

const myNewArray = [200,300,400,600,100]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))