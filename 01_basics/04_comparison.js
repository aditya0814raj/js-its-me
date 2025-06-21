console.log(2 > 1)
console.log(2 >= 1)
console.log(2 < 1)
console.log(2 == 1)
console.log(2 != 1)

console.log("2" > 1)  // dont compare two different datatypes , here js automatically convert string to no. and then compare but advicable dont do like this
console.log("02" > 1)

console.log(null > 0)
console.log (null == 0) // avoid these types of comparison 
console.log (null >= 0)

//note: equality check (==) and comparison ( > ,< , >= , <= ) work differntly , comparisons convert null to a number and treating it as 0 , Thats why (null >= 0) is true and (null > 0) is false.

console.log( undefined == 0)
console.log( undefined > 0)
console.log( undefined < 0)  // avoid these types of comparison 
console.log( undefined >= 0)
console.log( undefined <= 0)

// === (strict check) it check value and datatypes both ; given below eg ("2" == 2) here it converts "2" to a no (o/p = true). but ("2" === 2) this ia strict check case ,here datatypes are not same (o/p = false)

console.log("2" == 2)
console.log("2" === 2)
