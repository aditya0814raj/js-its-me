//Dates

let myDate = new Date()
console.log(myDate)
console.log(myDate.toString()) //converted to string
console.log(myDate.toDateString())
console.log(myDate.toLocaleDateString())
console.log(typeof(myDate))

let myCreatedDate = new Date (2025,0,25)
console.log(myCreatedDate.toLocaleDateString())

let myCreatedDates = new Date (2025,1,25,5,6,5)
console.log(myCreatedDates.toLocaleString())

let myTimeStamp =Date.now() 
console.log(myTimeStamp)
console.log(myCreatedDates.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long",
})