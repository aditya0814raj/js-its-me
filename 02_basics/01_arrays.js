//ARRAY

const myArr = [8, 1, 2, 3, 4, 5]
const myHeros = ["Shakitman" , "Heman"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0])

// Array method

//myArr.push(6)    // .push -> it add element at the end of array
//myArr.push(7)
//myArr.pop()      // .pop -> it remove the last element of array
//myArr.unshift(9)   // .unshift() -> it add element at the begining of array
//myArr.shift()        // .shift() -> it remove the 1st element of array
//console.log(myArr.includes(9))   
//console.log(myArr.indexOf(3))

//const newArr = myArr.join() // -> converts array to string ,here newArr is string bcz of .join()

//console.log(myArr)
//console.log(newArr)
//console.log(typeof newArr)

//**********slice,,,,,,splice******************/     read difference between slice and splice

console.log("A", myArr)
const myn1 = (myArr.slice(1,3))             //.slice() slice given array between given index.,it doesnt change the original array
console.log(myn1)
console.log("B", myArr)

const myn2 = (myArr.splice(1,3))           //.splice() works same as slice but it includes both argument strt and end whereas in slice end argument is explicit.
console.log("C", myArr)            // here my original array i.e myArr chanhges bcz of splice used before it.
console.log(myn2)

