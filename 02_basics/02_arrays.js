const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batsman"]

//marvel_heros.push(dc_heros)
//console.log(marvel_heros[3][2])
//marvel_heros.concat(dc_heros) // dont use (concat) with same array like (push) in above use it with new array like below
//const allheros = marvel_heros.concat(dc_heros)
//console.log(allheros)

const all_new_heros = [...marvel_heros,...dc_heros]  //spread all array like broken glass on floor
//console.log(all_new_heros)

const another_array = [1,2,3,[4,5,6],7,8,[9,5,4,[4,8,[89,98,[77,88,[45,54]],777]]],789]
//console.log(another_array.flat(Infinity))  //print with same array or uhh cn define new array to print this like below..... means (.flat can be used in both way)

const real_another_array = (another_array.flat(Infinity))
//console.log(real_another_array)

console.log(Array.isArray("Aditya"))
console.log(Array.from("Aditya"))
console.log(Array.from({name: "Aditya"})) // it returns empty sq.bracket as here we have to mention from which either of "key" or "value" we are making array.

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))