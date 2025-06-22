const name = "hitesh"
const repoCount = 50

//console.log( name + repoCount + " Value" )

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) //string interploatation use this way and avoid that plus plus way

const gameName = new String('hiteshhc') 

console.log(gameName[0])
console.log(gameName.__proto__)


console.log(gameName.length)
console.log(gameName.charAt(7))
console.log(gameName.indexOf('c'))
console.log(gameName.toUpperCase())

const newString1 = gameName.substring(0,4)
const newString2 = gameName.substring(4)
const newString3 = gameName.substring(-8,4)
const newString4 = gameName.substring(-69,4)
const newString5 = gameName.substring(4,0)
console.log(newString1)
console.log(newString2)
console.log(newString3)
console.log(newString4)
console.log(newString5)

const anotherString = gameName.slice(2,4)
console.log(anotherString)

const newStringOne = "    hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())
console.log(newStringOne.trimStart())
console.log(newStringOne.trimEnd())

const url = "https://aditya.com/aditya%100Raj"
console.log(url.replace('%100','--'))
console.log(url.includes('me'))
console.log(url.search ('aditya%'))

//read split and like all above atleast once through "mdn web docs"