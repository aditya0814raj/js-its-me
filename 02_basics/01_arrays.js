//ARRAY
const myHeros = ["Shakitman" , "Heman"]
const myArr2 = new Array(1,2,3,4)
const myArr3 = ('herc','dog')   // its not an array ,pass it in [...] to make it array.

//console.log(myArr3[2])    //the reason "herc" is ignored is because of the comma operator rule: return only the last expression’s value.
const myArr = (8, 1, 2, 3, 4, 5)
//console.log(myArr[0]) //"undefined"
const num = 12345;  //in JS, numbers cannot be accessed like strings with [index].You must convert them to a string first if you want digit access.
//const strNum = num.toString();

//console.log(strNum[0]); // "1"
//console.log(strNum[2]); // "3"

// Array method
                  //      Diff b/w .push() and .concat()
//.push(6)    // .push -> it add element at the end of array and returns new length of new array . it modify the original array
//.push(7)
const myArr0 = [8, 1, 2, 3, 4, 5]
console.log(myArr0.push(5))
console.log(myArr0)
const myArr1 = [8, 1, 2, 3, 4, 5];         //   .concat() does not modify the original array.It returns a new array with the added elements
const newArr = myArr1.concat(20, 30, 40);
console.log(newArr);  // updated array
console.log(myArr1);  // original array
//.pop()      // .pop -> it removes the last element of an array.Returns the removed element.Modifies the original array.
const arr = [1, 2, 3, 4];
const last = arr.pop();
console.log(last); // 4
console.log(arr);  // [1, 2, 3]

//.unshift(9)   // .unshift() -> it add element at the begining of array,Adds one or more elements at the start of the array,Returns the new length of the array.Modifies the original array.
const arr2 = [2, 3, 4];
const newLength = arr2.unshift(0, 1);
console.log(newLength); // 5
console.log(arr2);       // [0, 1, 2, 3, 4]

//.shift()        // .shift() -> it remove the 1st element of array,Returns the removed element,Modifies the original array.
const arr1 = [1, 2, 3, 4];
const first = arr1.shift();
console.log(first); // 1
console.log(arr1);   // [2, 3, 4]

 //.includes() Checks whether an array contains a specific element.Returns true if found, otherwise false.Does not modify the array.
const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('mango'));  // false

console.log(fruits.includes('cherry', 2)); // true
console.log(fruits.includes('apple', 1));  // false (starts searching from index 1)

//indexOf() Returns the first index of the specified element in the array.Returns -1 if the element is not found.
const arr3 = ['apple', 'banana', 'cherry'];
console.log(arr3.indexOf('banana')); // 1
console.log(arr3.indexOf('mango'));  // -1

//.join() // -> converts array to string ,here newArr is string bcz of .join(),Joins all elements of an array into a string.Optional separator (default is comma ,).
const arr4 = [1, 2, 3, 4];
console.log(arr4.join());     // "1,2,3,4"
console.log(arr4.join('-'));  // "1-2-3-4"
console.log(arr4.join(''));   // "1234"



//**********slice,,,,,,splice******************/     read difference between slice and splice
// .slice()
// Purpose: Returns a shallow copy of a portion of an array.Does NOT modify the original array.Syntax:array.slice(startIndex, endIndex) where , startIndex → inclusive and endIndex → exclusive.
const arr5 = [1, 2, 3, 4, 5];
const part = arr5.slice(1, 4); // from index 1 to 3
console.log(part); // [2, 3, 4]
console.log(arr5);  // [1, 2, 3, 4, 5]  original array unchanged

// .splice()
//Purpose: Remove/add/replace elements in an array in place.Syntax: array.splice(startIndex, deleteCount, item1, item2, …),Returns: Array of removed elements,Modifies Original Array: ✅
let arr6 = [1,2,3,4,5];
arr.splice(1,2,8,9);  // remove 2 at index 1, add 8,9
console.log(arr6);      // [1,8,9,4,5]
